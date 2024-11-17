import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Modal } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Screen3 = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const songs = [
    {
      id: "1",
      title: "FLOWER",
      artist: "Jessica Gonzalez",
      plays: "2.1M",
      duration: "3:36",
      image: require('../assets/3_image/Image 51.png'),
    },
    {
      id: "2",
      title: "Shape of You",
      artist: "Anthony Taylor",
      plays: "68M",
      duration: "3:35",
      image: require('../assets/3_image/Image 52.png'),
    },
    {
      id: "3",
      title: "Blinding Lights",
      artist: "Brian Bailey",
      plays: "93M",
      duration: "4:39",
      image: require('../assets/3_image/Image 53.png'),
    },
    {
      id: "4",
      title: "Levitating",
      artist: "Anthony Taylor",
      plays: "9M",
      duration: "7:48",
      image: require('../assets/3_image/Image 54.png'),
    },
    {
      id: "5",
      title: "Astronaut in the Ocean",
      artist: "Pedro Moreno",
      plays: "23M",
      duration: "3:36",
      image: require('../assets/3_image/Image 55.png'),
    },
    {
      id: "6",
      title: "Dynamite",
      artist: "Elena Jimenez",
      plays: "10M",
      duration: "6:22",
      image: require('../assets/3_image/Image 56.png'),
    },
  ];
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
      <View style={{ margin: "4%", marginTop: "10%", }}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../assets/2_image/Container 31.png')}
            style={styles.coverImage}
          />
          <View style={styles.headerDetails}>
            <Text style={styles.playlistTitle}>Top 50 - Canada</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '3%' }}>
              <Icon name="heart-outline" size={18} color="skyblue" />
              <Text style={styles.playlistMeta}>1,234</Text>
              <Icon name="ellipse" size={8} color="gray" />
              <Text style={styles.playlistMeta}>05:10:18</Text>
            </View>
            <Text style={styles.playlistDesc}>Daily chart-toppers update</Text>
          </View>
        </View>

        {/* Control Buttons */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <Icon name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shuffle" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Song List */}
        <FlatList
          data={songs}
          renderItem={renderSong}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
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
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
          <Icon name="home-outline" size={24} color="#000" />
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
          <Icon name="library-outline" size={24} color="#54aeff" />
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
    backgroundColor: "#fff",
    paddingBottom: "10%"
  },
  header: {
    flexDirection: "row"
  },
  coverImage: {
  },
  headerDetails: {
    marginLeft: "4%",
    justifyContent: "center",
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
  },
  playlistMeta: {
    color: "gray"
  },
  playlistDesc: {
    color: "gray",
    marginTop: "1%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "black",
    borderRadius: 50,
    padding: "4%",
  },
  listContainer: {
    paddingBottom: "4%",
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "2%",
  },
  songImage: {
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
export default Screen3;
