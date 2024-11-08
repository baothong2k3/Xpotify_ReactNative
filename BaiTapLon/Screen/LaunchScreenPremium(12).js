import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PremiumScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Screen12/Image112.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Image
          source={require('../assets/Screen12/Image113.png')}
          style={styles.logo}
        />
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '35%',
          }}>
          <Image
            source={require('../assets/Screen12/WelcometoPremium.png')}
            style={{ marginTop: 40 }}
          />
          <View style={{ height: '40%' }}>
            <Text style={styles.dots}>...</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("SubscriptionScreen")} >
            <Image source={require('../assets/Screen12/Button14.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 250,
  },
  dots: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
});