import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Avatar, Button } from 'react-native-elements';

const artistProfile = {
  name: 'Ryan Young',
  followers: '65.1K Followers',
  profileImage: '../assets/5_image/Image 63.png', // Thay bằng link ảnh thật nếu có
  popularSongs: [
    { title: 'Let you free', plays: '68M', duration: '03:35' },
    { title: 'Blinding Lights', plays: '93M', duration: '04:39' },
    { title: 'Levitating', plays: '9M', duration: '07:48' },
    { title: 'Astronaut in the Ocean', plays: '23M', duration: '03:36' },
    { title: 'Dynamite', plays: '10M', duration: '06:22' },
  ],
  albums: [
    { title: 'ME', artist: 'Jessica Gonzalez', cover: '../assets/5_image/Image 66.png' },
    { title: 'Magna nost', artist: 'Jessica Gonzalez', cover: '../assets/5_image/Image 67.png' },
    { title: 'Proident sunt', artist: 'Jessica Gonzalez', cover: '../assets/5_image/Image 68.png' },
  ],
  fansAlsoLike: [
    { name: 'Magna nost', artist: 'Jessica Gonzalez' },
    { name: 'Exercitatio', artist: 'Brian Harris' },
    { name: 'Tempor pariatur', artist: 'Tyler Anderson' },
  ],
};

export default function Screen5({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar rounded size="xlarge" source={{ uri: artistProfile.profileImage }} />
        <Text style={styles.artistName}>{artistProfile.name}</Text>
        <Text style={styles.followers}>{artistProfile.followers}</Text>
        <View style={styles.actionButtons}>
          <Button title="Follow" buttonStyle={styles.followButton} />
          <Icon name="more-horiz" size={30} />
          <Icon name="shuffle" size={30} />
        </View>
      </View>

      {/* Popular Songs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        {artistProfile.popularSongs.map((song, index) => (
          <View key={index} style={styles.songItem}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songPlays}>{song.plays} • {song.duration}</Text>
          </View>
        ))}
      </View>

      {/* Albums */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Albums</Text>
        <ScrollView horizontal>
          {artistProfile.albums.map((album, index) => (
            <View key={index} style={styles.albumItem}>
              <Image source={{ uri: album.cover }} style={styles.albumCover} />
              <Text>{album.title}</Text>
              <Text>{album.artist}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Fans Also Like */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fans also like</Text>
        <FlatList
          horizontal
          data={artistProfile.fansAlsoLike}
          renderItem={({ item }) => (
            <View style={styles.fanItem}>
              <Avatar rounded size="medium" source={require('../assets/5_image/Image 63.png')} />
              <Text>{item.name}</Text>
              <Text>{item.artist}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  artistName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  followers: {
    color: 'gray',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  followButton: {
    marginRight: 10,
    backgroundColor: '#1DB954',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  songTitle: {
    fontWeight: '500',
  },
  songPlays: {
    color: 'gray',
  },
  albumItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  albumCover: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  fanItem: {
    alignItems: 'center',
    marginRight: 15,
  },
});