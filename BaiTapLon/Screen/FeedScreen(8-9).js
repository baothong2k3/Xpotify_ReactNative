import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { height } = Dimensions.get('window');
const feedData = [
  {
    id: '1',
    username: 'Jessica Gonzalez',
    verified: true,
    title: 'FLOWER',
    image_user: require('../assets/Screen08/Avatar4.png'),
    image: require('../assets/Screen08/Image93.png'),
    plays: 125,
    duration: '05:15',
    likes: 20,
    comments: 3,
    shares: 1,
    time: '3d',
    commentsData: [
      {
        id: '1',
        username: 'Sally Rooney',
        image_user: require('../assets/Screen09/Avatar8.png'),
        text: 'Do duis cul 😍',
        time: '17h',
      },
      {
        id: '2',
        username: 'Jason',
        image_user: require('../assets/Screen09/Avatar9.png'),
        text: 'Minim magna exc 😍',
        time: '48m',
      },
      {
        id: '3',
        username: 'Michael Key',
        image_user: require('../assets/Screen09/Avatar11.png'),
        text: 'Commodo 🔥',
        time: '48m',
      },
    ],
  },
  {
    id: '2',
    username: 'William King',
    verified: true,
    title: 'Me',
    image_user: require('../assets/Screen08/Avatar5.png'),
    image: require('../assets/Screen08/Image94.png'),
    plays: 245,
    duration: '05:15',
    likes: 45,
    comments: 9,
    shares: 2,
    time: '5d',
    commentsData: [
      {
        id: '1',
        username: 'Sally Rooney',
        image_user: require('../assets/Screen09/Avatar8.png'),
        text: 'Do duis cul 😍',
        time: '17h',
      },
      {
        id: '2',
        username: 'Jason',
        image_user: require('../assets/Screen09/Avatar9.png'),
        text: 'Minim magna exc 😍',
        time: '48m',
      },
      {
        id: '3',
        username: 'Michael Key',
        image_user: require('../assets/Screen09/Avatar11.png'),
        text: 'Commodo 🔥',
        time: '48m',
      },
    ],
  },
];
const FeedScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedComments, setSelectedComments] = useState([]);

  const openComments = (comments) => {
    setSelectedComments(comments);
    setModalVisible(true);
  };
  {/* Header */ }
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.feedTitle}>Feed</Text>
    </View>
  );

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
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => openComments(item.commentsData)}>
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
    <View style={styles.container}>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
      />

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="close" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.commentTitle}>3 comments</Text>
            <ScrollView>
              {selectedComments.map((comment) => (
                <View key={comment.id} style={styles.commentContainer}>
                  <Image
                    source={comment.image_user}
                    style={styles.commentAvatar}
                  />
                  <View style={{ flex: 1 }}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        {comment.username}
                      </Text>
                      <Text style={{ paddingLeft: 5 }}>{comment.text}</Text>
                    </View>

                    <View style={styles.commentInfo}>
                      <Text style={styles.commentTime}>{comment.time}</Text>
                      <Text style={styles.commentActions}>1 like</Text>
                      <Text style={styles.commentActions}>Reply</Text>
                    </View>
                  </View>
                  <Icon name="heart-outline" size={18} color="#000" />
                </View>
              ))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/Screen09/Avatar13.png')} />
              <TextInput
                placeholder="Write a comment..."
                style={styles.input}
              />
              <TouchableOpacity>
                <Icon name="send" size={20} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
          <Icon name="list-outline" size={24} color="#54aeff" />
          <Text style={styles.navText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LibraryScreen")}>
          <Icon name="library-outline" size={24} color="#000" />
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
    backgroundColor: '#fff',
    padding: 16,
    paddingBottom: "10%"
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  backButton: {
    marginRight: 8,
  },
  feedTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  listContainer: {
    paddingBottom: 20,
  },
  postContainer: {
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    height: height * 0.65,
  },

  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  commentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  commentTime: {
    color: '#888',
    fontSize: 12,
  },
  commentActions: {
    marginLeft: 16,
    color: '#007AFF',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: '#888',
    height: 50,
    opacity: 0.5,
  },
});

export default FeedScreen;