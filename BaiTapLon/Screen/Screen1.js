import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const Screen1 = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ width: "100%", height: "100%" }}>
        <Image
          resizeMode="cover"
          source={require("../assets/1_image/Image 30.png")}
        />
        <Image
          style={{ position: "absolute", top: 50, right: 130 }}
          source={require("../assets/1_image/Image33.png")}
        />
        <Image
          style={{ position: "absolute", top: 200, right: 50 }}
          source={require("../assets/1_image/Your musicYour artists.png")}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen2")}
          style={{
            position: "absolute",
            top: 450,
            left: 10,
            backgroundColor: "black",
            width: 340,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Create an account
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen2")}
          style={{
            position: "absolute",
            top: 530,
            left: 10,
            backgroundColor: "rgb(235, 253, 255)",
            width: 340,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <Text style={{ color: "rgb(77, 188, 200)", fontSize: 20 }}>
              I already have an account
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Screen1;
