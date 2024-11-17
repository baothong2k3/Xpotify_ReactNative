import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Screen4  = () => {
  return (
    <ImageBackground
      source={require('../assets/4_image/Image 58.png')}
      style={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <TouchableOpacity>
          <Icon name="chevron-down-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>FLOWER</Text>
        <Text style={styles.artistName}>Jessica Gonzalez</Text>
      </View>

      <View style={styles.waveformContainer}>
        <View style={styles.waveform}></View>
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  songInfo: {
    alignItems: 'center',
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
  },
  waveform: {
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    borderRadius: 25,
    opacity: 0.7,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  playButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default Screen4;