import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const feedData = [
  {
    id: '1',
    username: 'Jessica Gonzalez',
    verified: true,
    title: 'FLOWER',
    image_user: require('./All_Image/Screen08/Avatar4.png'),
    image: require('./All_Image/Screen08/Image93.png'),
    plays: 125,
    duration: '05:15',
    likes: 20,
    comments: 3,
    shares: 1,
    time: '3d',
  },
  {
    id: '2',
    username: 'William King',
    verified: true,
    title: 'Me',
    image_user: require('./All_Image/Screen08/Avatar5.png'),
    image: require('./All_Image/Screen08/Image94.png'),
    plays: 245,
    duration: '05:15',
    likes: 45,
    comments: 9,
    shares: 2,
    time: '5d',
  },
];

const FeedScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={item.image_user} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.postTime}>Posted a track • {item.time}</Text>
        </View>
        <Icon name="ellipsis-horizontal" size={20} color="#888" />
      </View>
      <View>
        <Image source={item.image} style={styles.postImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.artist}>{item.username}</Text>
            <View style={styles.stats}>
              <Icon name="play" size={14} color="#fff" />
              <Text style={styles.statText}>{item.plays}</Text>
              <Text style={styles.duration}> • {item.duration}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart-outline" size={20} color="#000" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-outline" size={20} color="#000" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="repeat-outline" size={20} color="#000" />
          <Text style={styles.actionText}>{item.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={feedData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text style={styles.feedTitle}>Feed</Text>}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  feedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  userInfo: {
    flex: 1,
    marginLeft: 8,
  },
  username: {
    fontWeight: 'bold',
  },
  postTime: {
    color: '#888',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 250,
  },
  titleContainer: {
    padding: 16,
    backgroundColor: '#00000080',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  artist: {
    color: 'white',
    paddingTop: 3,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statText: {
    color: '#fff',
    marginLeft: 4,
  },
  duration: {
    color: '#fff',
    marginLeft: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 4,
    color: '#000',
  },
});

export default FeedScreen;