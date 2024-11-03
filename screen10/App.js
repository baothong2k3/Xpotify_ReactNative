import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const songs = [
  {
    id: '1',
    title: 'FLOWER',
    artist: 'Jessica Gonzalez',
    plays: '2.1M',
    duration: '3:36',
    image: require('./All_Image/Image101.png'), // Thay bằng URL ảnh thật
  },
  {
    id: '2',
    title: 'Shape of You',
    artist: 'Anthony Taylor',
    plays: '68M',
    duration: '3:35',
    image: require('./All_Image/Image102.png'),
  },
  {
    id: '3',
    title: 'Blinding Lights',
    artist: 'Ashley Scott',
    songs: '4 songs',
    image: require('./All_Image/Image103.png'),
  },
  {
    id: '4',
    title: 'Levitating',
    artist: 'Anthony Taylor',
    plays: '9M',
    duration: '7:48',
    image: require('./All_Image/Image104.png'),
  },
  {
    id: '5',
    title: 'Astronaut in the Ocean',
    artist: 'Pedro Moreno',
    plays: '23M',
    duration: '3:36',
    image: require('./All_Image/Image105.png'),
  },
  {
    id: '6',
    title: 'Dynamite',
    artist: 'Elena Jimenez',
    plays: '10M',
    duration: '6:22',
    image: require('./All_Image/Image106.png'),
  },
];

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Library</Text>
        <Icon name="search-outline" size={24} color="black" />
      </View>

      <View style={styles.tags}>
        {['Playlists', 'New tag', 'Songs', 'Albums', 'Artists'].map((tag) => (
          <TouchableOpacity key={tag} style={styles.tag}>
            <Text>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.profile}>
        <Image
          style={styles.profileImage}
          source={require('./All_Image/Image107.png')} // Ảnh đại diện
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Mer Watson</Text>
          <Text style={styles.profileFollowers}>8 1.234K Followers</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.song}>
            <Image style={styles.songImage} source={item.image} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>
                {item.artist} •{' '}
                {item.plays
                  ? `${item.plays}  •  ${item.duration}`
                  : `${item.songs}`}
              </Text>
            </View>
            {item.plays && (
              <Icon name="heart-outline" size={24} color="skyblue" />
            )}
            {!item.plays && (
              <Icon name="chevron-forward-outline" size={24} color="black" />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileFollowers: {
    color: 'gray',
  },
  followButton: {
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  followText: {
    color: 'white',
    fontWeight: 'bold',
  },
  song: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  songInfo: {
    flex: 1,
    marginLeft: 10,
  },
  songTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  songArtist: {
    color: 'gray',
  },
});

export default LibraryScreen;
