import React, { useState } from 'react';
import {
    View,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

const plans = [
    {
        id: '1',
        image: require('../assets/Screen13/Container110.png'),
    },
    {
        id: '2',
        image: require('../assets/Screen13/Container112.png'),
    },
];

const SubscriptionScreen = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItem = ({ item }) => (
        <Image source={item.image} style={styles.planImage} />
    );

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Screen13/Image116.png')}
                style={styles.background}
            />
            <View style={styles.overlay}>
                <Image source={require('../assets/Screen13/Unlimitedmusicselections.png')} />
                <View>
                    <View style={styles.flatListContainer}>
                        <FlatList
                            data={plans}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={(event) => {
                                const index = Math.round(
                                    event.nativeEvent.contentOffset.x /
                                    event.nativeEvent.layoutMeasurement.width
                                );
                                setCurrentIndex(index);
                            }}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                    <Text style={styles.dots}>...</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
                    <Image source={require('../assets/Screen13/Button17.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    overlay: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flatListContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    planImage: {
        marginHorizontal: 15,
        borderRadius: 10,
    },
    dots: {
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
    },
});

export default SubscriptionScreen;