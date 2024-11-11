import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
const screenWidth = Dimensions.get('window').width;
const Screen1 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        resizeMode="cover"
        source={require("../assets/1_image/Image 30.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Image
          style={styles.logo}
          source={require("../assets/1_image/Image33.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/1_image/Your musicYour artists.png")}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen2")}
            style={[styles.button, styles.createButton]}
          >
            <Text style={styles.createButtonText}>Create an account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Screen2")}
            style={[styles.button, styles.loginButton]}
          >
            <Text style={styles.loginButtonText}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    marginVertical: '15%'
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  button: {
    width: screenWidth * 0.9,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  createButton: {
    backgroundColor: "black"
  },
  createButtonText: {
    color: "white",
    fontSize: 25,
  },
  loginButton: {
    backgroundColor: "rgb(235, 253, 255)",
  },
  loginButtonText: {
    color: "rgb(77, 188, 200)",
    fontSize: 25,
  },
});

export default Screen1;