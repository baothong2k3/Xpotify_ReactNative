import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Screen4 = () => {
  return (
    <ImageBackground
      source={require('../assets/4_image/Image 58.png')}
      style={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.time}>Play</Text>
        <TouchableOpacity>
          <Icon name="chevron-down-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>


      <View style={{ height: "42%", position: "relative" }}>
        {/* Nền mờ */}
        <View
          style={{
            ...StyleSheet.absoluteFillObject, // Phủ kín container
            backgroundColor: "black",
            opacity: 0.2,
          }}
        />
        {/* Nội dung bên trong */}
        <View style={{ margin: "4%" }}>
          <View style={styles.songInfo}>
            <Text style={styles.songTitle}>FLOWER</Text>
            <Text style={styles.artistName}>Jessica Gonzalez</Text>
          </View>

          <View style={styles.waveformContainer}>
            <View style={styles.waveform}>
              <Image source={require("../assets/4_image/Group 4 (1).png")} />
            </View>
          </View>
          <View style={styles.controls}>
            <TouchableOpacity>
              <Icon name="shuffle-outline" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="play-skip-back-outline" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.playButton}>
              <Icon name="play-outline" size={32} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="play-skip-forward-outline" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="ellipsis-horizontal-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.socialIcons}>
            <View style={styles.iconRow}>
              <Icon name="heart-outline" size={20} color="#fff" />
              <Text style={styles.iconText}>12K</Text>
            </View>
            <View style={styles.iconRow}>
              <Icon name="chatbubble-outline" size={20} color="#fff" />
              <Text style={styles.iconText}>450</Text>
            </View>
            <Icon name="share-outline" size={20} color="#fff" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: "10%",
    marginHorizontal: "4%",
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  songInfo: {
    alignItems: 'flex-start',
  },
  songTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.7,
  },
  waveformContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: "10%",
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: "10%",
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    marginLeft: "1%",
  },
});

export default Screen4;