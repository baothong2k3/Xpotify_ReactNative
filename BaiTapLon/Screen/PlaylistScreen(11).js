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
            <TouchableOpacity style={styles.addButton}>
                <Image source={require('../assets/Screen11/IconButton5.png')} />
            </TouchableOpacity>
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
        bottom: 120,
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