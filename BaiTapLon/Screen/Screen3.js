import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Modal } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import axios from 'axios';
const Screen3 = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songs, setSongs] = useState([]);
    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get('https://6750288b69dc1669ec19e8a4.mockapi.io/song');
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, []);
  const openModal = async (song) => {
    setSelectedSong(song);
    setModalVisible(true);
    await playPauseAudio(song.audio); // Phát nhạc khi modal mở
  };

  const closeModal = async () => {
    setModalVisible(false);
    setSelectedSong(null);
    await stopAudio(); // Ngừng nhạc khi modal đóng
  };


  useEffect(() => {
    const updateStatus = async () => {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          setPosition(status.positionMillis || 0);
          setDuration(status.durationMillis || 0);
        }
      }
    };

    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playPauseAudio = async (audioUri) => {
    try {
      if (currentSong !== audioUri) {
        if (sound) await sound.unloadAsync(); // Unload current sound
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: audioUri }
        );
        setSound(newSound);
        setCurrentSong(audioUri);
        await newSound.playAsync();
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.playAsync();
        }
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setPosition(0);
    }
  };

  const formatTime = (millis) => {
    if (!millis) return '0:00';
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const handlePreviousSong = async () => {
    const currentIndex = songs.findIndex((song) => song.id === selectedSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length; // Vòng lặp về cuối danh sách
    const previousSong = songs[previousIndex];
    setSelectedSong(previousSong);
    await playPauseAudio(previousSong.audio); // Phát nhạc của bài trước
  };

  const handleNextSong = async () => {
    const currentIndex = songs.findIndex((song) => song.id === selectedSong.id);
    const nextIndex = (currentIndex + 1) % songs.length; // Vòng lặp về đầu danh sách
    const nextSong = songs[nextIndex];
    setSelectedSong(nextSong);
    await playPauseAudio(nextSong.audio); // Phát nhạc của bài tiếp theo
  };
  const renderSong = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.songContainer}>
        <Image source={{uri:item.image}} style={styles.songImage} />
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
            onRequestClose={closeModal}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                {/* Song Info */}
                <View style={styles.modalHeader}>
                  <Image source={selectedSong.image} style={styles.modalImage} />
                  <View style={{ flex: 1, marginHorizontal: 10 }}>
                    <Text style={styles.modalTitle}>{selectedSong.title}</Text>
                    <Text style={styles.modalArtist}>{selectedSong.artist}</Text>
                  </View>
                  <TouchableOpacity onPress={closeModal}>
                    <Icon name="close" size={48} color="red" />
                  </TouchableOpacity>
                </View>

                {/* Player Controls */}
                <View style={styles.controls}>
                  <TouchableOpacity onPress={() => handlePreviousSong()}>
                    <Icon name="play-skip-back-outline" size={48} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => playPauseAudio(selectedSong.audio)}>
                    <Icon
                      name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
                      size={48}
                      color="white"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleNextSong()}>
                    <Icon name="play-skip-forward-outline" size={48} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Progress Bar at the Bottom */}
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>{formatTime(position)}</Text>
                <Slider
                  style={styles.progressBar}
                  minimumValue={0}
                  maximumValue={duration}
                  value={position}
                  minimumTrackTintColor="#1db954"
                  maximumTrackTintColor="#ccc"
                  thumbTintColor="#1db954"
                  onSlidingComplete={async (value) => {
                    if (sound) await sound.setPositionAsync(value);
                  }}
                />
                <Text style={styles.progressText}>{formatTime(duration)}</Text>
              </View>
            </View>
          </Modal>
        )}
      </View>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("Screen2")}>
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("Screen6")}>
          <Icon name="search-outline" size={24} color="#000" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("FeedScreen")}>
          <Icon name="list-outline" size={24} color="#000" />
          <Text style={styles.navText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("LibraryScreen")}>
          <Icon name="library-outline" size={24} color="#54aeff" />
          <Text style={styles.navText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("ScreenAI")}>
          <Icon name="chatbubble-ellipses-outline" size={24} color="#000" />
          <Text style={styles.navText}>GeminiAI</Text>
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
    width: 60,
    height: 60,
    borderRadius: 8,
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
    paddingBottom: '17%',
  },
  modalContent: {
    backgroundColor: "black",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  modalTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalArtist: {
    color: "gray",
    fontSize: 14,
  },
  controls: {
    alignItems: "center",
    marginVertical: 20,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "black",
    height: 60,
  },
  progressText: {
    fontSize: 14,
    color: "white",
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 10,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
});
export default Screen3;
