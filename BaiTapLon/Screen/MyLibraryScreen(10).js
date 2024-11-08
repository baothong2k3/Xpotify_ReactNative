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
        image: require('../assets/Screen10/Image101.png'),
    },
    {
        id: '2',
        title: 'Shape of You',
        artist: 'Anthony Taylor',
        plays: '68M',
        duration: '3:35',
        image: require('../assets/Screen10/Image102.png'),
    },
    {
        id: '3',
        title: 'Blinding Lights',
        artist: 'Ashley Scott',
        songs: '4 songs',
        image: require('../assets/Screen10/Image103.png'),
    },
    {
        id: '4',
        title: 'Levitating',
        artist: 'Anthony Taylor',
        plays: '9M',
        duration: '7:48',
        image: require('../assets/Screen10/Image104.png'),
    },
    {
        id: '5',
        title: 'Astronaut in the Ocean',
        artist: 'Pedro Moreno',
        plays: '23M',
        duration: '3:36',
        image: require('../assets/Screen10/Image105.png'),
    },
    {
        id: '6',
        title: 'Dynamite',
        artist: 'Elena Jimenez',
        plays: '10M',
        duration: '6:22',
        image: require('../assets/Screen10/Image106.png'),
    },
];

const LibraryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.feedTitle}>Your Library</Text>
            </View>

            <View style={styles.tags}>
                {[
                    { label: 'Playlists', screen: 'PlaylistScreen' },
                    { label: 'New tag', screen: 'NewTagScreen' },
                    { label: 'Songs', screen: 'SongsScreen' },
                    { label: 'Albums', screen: 'AlbumsScreen' },
                    { label: 'Artists', screen: 'ArtistsScreen' },
                ].map((tag) => (
                    <TouchableOpacity
                        key={tag.label}
                        style={styles.tag}
                        onPress={() => navigation.navigate(tag.screen)}>
                        <Text>{tag.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.profile}>
                <Image
                    style={styles.profileImage}
                    source={require('../assets/Screen10/Image107.png')}
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
            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.footerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
                        <Image
                            style={styles.footerIcon}
                            source={require("../assets/2_image/Home.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.footerText}>Home</Text>
                </View>
                <View style={styles.footerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate("Screen6")}>
                        <Image
                            style={styles.footerIcon}
                            source={require("../assets/2_image/Search.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.footerText}>Search</Text>
                </View>
                <View style={styles.footerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate("FeedScreen")}>
                        <Image
                            style={styles.footerIcon}
                            source={require("../assets/2_image/Activity Feed.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.footerText}>Feed</Text>
                </View>
                <View style={styles.footerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate("LibraryScreen")}>
                        <Image
                            style={styles.footerIcon}
                            source={require("../assets/2_image/book1.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.footerText}>Library</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
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
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderColor: 'rgb(175, 179, 182)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
    footerItem: {
        alignItems: 'center',
    },
    footerIcon: {
        width: 25,
        height: 25,
    },
    footerText: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 4,
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