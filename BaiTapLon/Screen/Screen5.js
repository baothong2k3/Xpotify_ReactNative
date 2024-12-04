import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import axios from 'axios';
const Screen5 = ({ navigation }) => {
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
        const response = await axios.get('https://6750288b69dc1669ec19e8a4.mockapi.io/PostMalone');
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
  const artist = {
    name: 'Post Malone',
    followers: '65.1K Followers',
    imageUrl: require('../assets/5_image/Image 63.png'),
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
  const renderSong = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.songContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.songImage}/>
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
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Post_Malone_2018.jpg/250px-Post_Malone_2018.jpg" }} style={{ width: 200, height: 200, borderRadius: 200, marginVertical: '3%' }} />
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
          data={songs}
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
            onRequestClose={closeModal}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                {/* Song Info */}
                <View style={styles.modalHeader}>
                  <Image source={{ uri: selectedSong.imageUrl }} style={styles.modalImage} />
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
          <Icon name="home-outline" size={24} color="#54aeff" />
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
          <Icon name="library-outline" size={24} color="#000" />
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
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
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

export default Screen5;