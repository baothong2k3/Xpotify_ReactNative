import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';

const songsData = [
  { id: '1', title: 'Skyfall', artist: 'Adele', plays: '2.1M', duration: '4:49', image: require('../assets/7_image/Image 83.png'), audio: 'https://drive.google.com/uc?export=download&id=1c4iAyqzRND2TnM3GO0iGh5N3DOJLwmh3', },
  { id: '2', title: 'Somewhere Only We Know', artist: 'Keane', plays: '68M', duration: '3:35', image: require('../assets/7_image/Image 84.png'), audio: 'https://drive.google.com/uc?export=download&id=1N92Or5Z2Y7jW61mCM8NFVtQpJYsheb_k', },
  { id: '3', title: 'Die With Smile', artist: 'Lady Gaga', plays: '93M', duration: '4:12', image: require('../assets/7_image/Image 86.png'), audio: 'https://drive.google.com/uc?export=download&id=1rEXxQVB58R0l8EbxZZCd4ATJRyvIZzvW', },
  { id: '4', title: 'Circles', artist: 'Post Malone', plays: '9M', duration: '3:46', image: require('../assets/7_image/Image 87.png'), audio: 'https://drive.google.com/uc?export=download&id=1htuRwn5iLK4gsPYnEgcJYshdPWD2Flq1', },
  { id: '5', title: 'I Had Some Help', artist: 'Post Malone', plays: '23M', duration: '3:04', image: require('../assets/7_image/Image 88.png'), audio: 'https://drive.google.com/uc?export=download&id=1lv1x2b1mjSVhNVykv3PMcxj64EKYR09i', },
  { id: '6', title: 'Missin You Like This', artist: 'Post Malone', plays: '10M', duration: '3:43', image: require('../assets/7_image/Image 89.png'), audio: 'https://drive.google.com/uc?export=download&id=1JZjs9wy3jWXq5mtDJmTC8CJwJVBNIVP6', },
  { id: '7', title: 'Take What You Want', artist: 'Post Malone', plays: '81M', duration: '3:48', image: require('../assets/7_image/Image 90.png'), audio: 'https://drive.google.com/uc?export=download&id=1YEDpgEnCTq0f557Je2m7nhNMpFy-a92G', },
];

const Screen7 = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
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

export default Screen7;
