import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const playlists = [
  {
    id: '1',
    title: 'Ipsum sit nulla',
    author: 'Ashley Scott',
    numOfSongs: 12,
    image: require('./All_Image/Screen11/Image110.png'),
  },
  {
    id: '2',
    title: 'Occaecat aliqu',
    author: 'Jose Garcia',
    numOfSongs: 4,
    image: require('./All_Image/Screen11/Image111.png'),
  },
];

const PlaylistScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your playlists</Text>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.playlistItem}>
            <Image source={item.image} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>
                {item.author} • {item.numOfSongs} songs
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="chevron-forward-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton}>
        <Image source={require('./All_Image/Screen11/IconButton5.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playlistItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PlaylistScreen;
