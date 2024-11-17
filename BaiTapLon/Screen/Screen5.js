import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Screen5 = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const artist = {
    name: 'Ryan Young',
    followers: '65.1K Followers',
    imageUrl: require('../assets/5_image/Image 63.png'),
    popularSongs: [
      { id: '1', title: 'Let you free', plays: '68M', duration: '03:35', imageUrl: require('../assets/5_image/Image 66.png') },
      { id: '2', title: 'Blinding Lights', plays: '93M', duration: '04:39', imageUrl: require('../assets/5_image/Image 67.png') },
      { id: '3', title: 'Levitating', plays: '9M', duration: '07:48', imageUrl: require('../assets/5_image/Image 68.png') },
      { id: '4', title: 'Astronaut in the Ocean', plays: '23M', duration: '03:36', imageUrl: require('../assets/5_image/Image 69.png') },
      { id: '5', title: 'Dynamite', plays: '10M', duration: '06:22', imageUrl: require('../assets/5_image/Image 70.png') },
    ],
    albums: [
      { id: '1', title: 'ME', artist: 'Jessica Gonzalez', imageUrl: require('../assets/5_image/Image 71.png') },
      { id: '2', title: 'Magna nost', artist: 'Jessica Gonzalez', imageUrl: require('../assets/5_image/Image 72.png') },
      { id: '3', title: 'Proident', artist: 'Jessica Gonzalez', imageUrl: require('../assets/5_image/Image 77.png') },
    ],
    about:
      'Do in cupidatat aute et in officia aute laboris est Lorem est nisi dolor consequat voluptate duis irure. Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit.',
    fansAlsoLike: [
      { id: '1', title: 'Magna nost', artist: 'Jessica Gonzalez', imageUrl: require('../assets/5_image/Image 74.png') },
      { id: '2', title: 'Exercitatio', artist: 'Brian Harris', imageUrl: require('../assets/5_image/Image 75.png') },
      { id: '3', title: 'Tempor pariatur', artist: 'Tyler Anderson', imageUrl: require('../assets/5_image/Image 76.png') },
    ],
  };

  const openModal = (song) => {
    setSelectedSong(song);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedSong(null);
  };

  const renderSong = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.songContainer}>
        <Image source={item.imageUrl} />
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>{item.title}</Text>
          <Text style={styles.songArtist}>{artist.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="caret-forward" size={14} color="gray" />
            <Text style={[styles.songArtist, { marginHorizontal: "1%" }]}>{item.plays}</Text>
            <Icon name="ellipse" size={8} color="gray" style={{ marginHorizontal: "1%" }} />
            <Text style={[styles.songDuration, { marginHorizontal: "1%" }]}>{item.duration}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal-sharp" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderAlbum = ({ item }) => (
    <View style={[styles.albumItem, { paddingRight: '3%' }]}>
      <Image source={item.imageUrl} style={styles.albumImage} />
      <Text style={styles.albumTitle}>{item.title}</Text>
      <Text style={styles.albumArtist}>{item.artist}</Text>
    </View>
  );

  const renderFan = ({ item }) => (
    <View style={styles.fanItem}>
      <Image source={item.imageUrl} style={styles.fanImage} />
      <Text style={styles.fanTitle}>{item.title}</Text>
      <Text style={styles.fanArtist}>{item.artist}</Text>
    </View>
  );

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back-sharp" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Image source={artist.imageUrl} style={{ marginVertical: '3%' }} />
          <Text style={styles.artistName}>{artist.name}</Text>
          <Text style={styles.followers}>{artist.followers}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '2%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="ellipsis-horizontal-outline" size={36} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
            <TouchableOpacity style={{ marginRight: "10%" }}>
              <Icon name="shuffle-outline" size={36} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="play-circle-sharp" size={36} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Popular</Text>
    </View>
  );

  const renderFooter = () => (
    <View>
      <Text style={styles.sectionTitle}>Albums</Text>
      <FlatList
        horizontal
        data={artist.albums}
        keyExtractor={(item) => item.id}
        renderItem={renderAlbum}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: '7%' }}
      />
      <Text style={styles.sectionTitle}>About</Text>
      <Image source={require('../assets/5_image/Image 73.png')} />
      <Text style={styles.aboutText}>{artist.about}</Text>
      <TouchableOpacity><Text style={{ textAlign: 'center', marginTop: '4%', color: '#54aeff' }}>View more</Text></TouchableOpacity>
      <Text style={styles.sectionTitle}>Fans also like</Text>
      <FlatList
        horizontal
        data={artist.fansAlsoLike}
        keyExtractor={(item) => item.id}
        renderItem={renderFan}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: '7%' }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ margin: '4%' }}>
        <FlatList
          data={artist.popularSongs}
          renderItem={renderSong}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: "20%" }}
        />
        {/* Modal hiển thị bài hát */}
        {selectedSong && (
          <Modal
            visible={isModalVisible}
            transparent
            animationType="slide"
            onRequestClose={closeModal}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  {/* Ảnh bài hát */}
                  <Image source={selectedSong.imageUrl} style={styles.modalImage} />

                  {/* Thông tin bài hát */}
                  <View style={{ flex: 1, marginRight: "2%" }}>
                    <Text style={styles.modalTitle} numberOfLines={1} ellipsizeMode="tail">
                      {selectedSong.title}
                    </Text>
                    <Text style={styles.modalArtist} numberOfLines={1} ellipsizeMode="tail">
                      {artist.name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ marginRight: "4%" }}>
                      <Icon name="play-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: "4%" }}>
                      <Icon name="heart-outline" size={24} color="white" />
                    </TouchableOpacity>
                    {/* Nút đóng modal luôn đứng cuối */}
                    <TouchableOpacity onPress={closeModal}>
                      <Icon name="close" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
          <Icon name="home-outline" size={24} color="#54aeff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Screen6")}>
          <Icon name="search-outline" size={24} color="#000" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FeedScreen")}>
          <Icon name="list-outline" size={24} color="#000" />
          <Text style={styles.navText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LibraryScreen")}>
          <Icon name="library-outline" size={24} color="#000" />
          <Text style={styles.navText}>Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: "3%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  navText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: '10%'
  },
  artistName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: '1%'
  },
  followers: {
    color: 'gray',
  },
  followButton: {
    paddingVertical: "5%",
    paddingHorizontal: "12%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  followText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: '3%',
  },
  songItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  songTitle: {
    fontWeight: 'bold',
  },
  songPlays: {
    color: 'gray',
  },
  albumItem: {
    alignItems: 'flex-start',
  },
  albumImage: {
    borderRadius: 10,
  },
  albumTitle: {
    fontWeight: 'bold',
  },
  albumArtist: {
    color: 'gray',
  },
  aboutText: {
    color: 'gray',
    lineHeight: 25
  },
  fanItem: {
    paddingRight: '3%',
    alignItems: 'flex-start',
  },
  fanImage: {

  },
  fanTitle: {
    fontWeight: 'bold',
  },
  fanArtist: {
    color: 'gray',
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "2%",
  },
  songDetails: {
    flex: 1,
    marginHorizontal: "3%"
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  songArtist: {
    color: "gray",
  },
  songDuration: {
    color: "gray",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "black",
    width: "100%",
    position: "absolute",
    bottom: "8%",
    left: 0,
    right: 0,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    maxWidth: 150,
  },
  modalArtist: {
    fontSize: 14,
    color: "white",
    maxWidth: 150,
  },
  modalActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: "1%",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 50,
  },
});

export default Screen5;