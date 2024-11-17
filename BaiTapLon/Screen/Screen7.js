import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const songsData = [
  { id: '1', title: 'Me', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', image: require('../assets/7_image/Image 83.png') },
  { id: '2', title: 'Me Inc', artist: 'Anthony Taylor', plays: '68M', duration: '3:35', image: require('../assets/7_image/Image 84.png') },
  { id: '3', title: 'Dozz me', artist: 'Brian Bailey', plays: '93M', duration: '4:39', image: require('../assets/7_image/Image 86.png') },
  { id: '4', title: 'Eastss me', artist: 'Anthony Taylor', plays: '9M', duration: '7:48', image: require('../assets/7_image/Image 87.png') },
  { id: '5', title: 'Me Ali', artist: 'Pedro Moreno', plays: '23M', duration: '3:36', image: require('../assets/7_image/Image 88.png') },
  { id: '6', title: 'Me quis a', artist: 'Elena Jimenez', plays: '10M', duration: '6:22', image: require('../assets/7_image/Image 89.png') },
  { id: '7', title: 'Me light', artist: 'John Smith', plays: '81M', duration: '5:15', image: require('../assets/7_image/Image 90.png') },
];

const Screen7 = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
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
        <Image source={item.image} style={styles.songImage} />
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>{item.title}</Text>
          <Text style={styles.songArtist}>{item.artist}</Text>
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

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: '10%', margin: '4%', paddingBottom: "20%" }}>
        {/* Thanh tìm kiếm */}
        <View style={{ alignItems: 'center' }}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="#888" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {['All', 'Tracks', 'Albums', 'Artists'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Danh sách bài hát */}
        <TouchableOpacity onPress={{}}>
          <View style={styles.songContainer}>
            <Image source={require('../assets/7_image/Image 85.png')} style={styles.songImage} />
            <View style={styles.songDetails}>
              <Text style={styles.songTitle}>Mer Watson</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="person-outline" size={18} color="gray" />
                <Text style={styles.songArtist}>1.234K Followers</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <FlatList
          data={songsData}
          keyExtractor={(item) => item.id}
          renderItem={renderSong}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Screen6")}>
          <Icon name="search-outline" size={24} color="#54aeff" />
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
                <Image source={selectedSong.image} style={styles.modalImage} />

                {/* Thông tin bài hát */}
                <View style={{ flex: 1, marginRight: "2%" }}>
                  <Text style={styles.modalTitle} numberOfLines={1} ellipsizeMode="tail">
                    {selectedSong.title}
                  </Text>
                  <Text style={styles.modalArtist} numberOfLines={1} ellipsizeMode="tail">
                    {selectedSong.artist}
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
  followButton: {
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  followText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888',
    width: '90%',
    paddingHorizontal: "2%",
    paddingVertical: "1%",
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: "2%",
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007aff',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#007aff',
    fontWeight: 'bold',
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

export default Screen7;
