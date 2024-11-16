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
        image: require('../assets/Screen11/Image110.png'),
    },
    {
        id: '2',
        title: 'Occaecat aliqu',
        author: 'Jose Garcia',
        numOfSongs: 4,
        image: require('../assets/Screen11/Image111.png'),
    },
];

const PlaylistScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ margin: '4%' }}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Icon name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.feedTitle}>Your playlists</Text>
                </View>
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
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Image source={require('../assets/Screen11/IconButton5.png')} />
            </TouchableOpacity>
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
                    <Icon name="list-outline" size={24} color="#000" />
                    <Text style={styles.navText}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("LibraryScreen")}>
                    <Icon name="library-outline" size={24} color="#54aeff" />
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
        paddingBottom: '10%',
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '5%',
    },
    backButton: {
        marginRight: '1%',
    },
    feedTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    listContainer: {
        paddingBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    playlistItem: {
        flexDirection: 'row',
        paddingVertical: '2%',
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
        bottom: 100,
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