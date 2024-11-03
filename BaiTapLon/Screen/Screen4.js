import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

const Screen4 = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/4_image/Image 58.png")} // Đặt hình nền
      style={styles.backgroundImage} // Style cho hình nền
    >
      {/* Lớp phủ bóng chính */}
      <View style={styles.overlay} />

      {/* Nội dung hiển thị trên hình nền */}
      <View style={styles.contentContainer}>
        <View style={styles.playContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
              paddingBottom: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={styles.playText}>Play</Text>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/4_image/Expand Arrow.png")}
            />
          </View>
        </View>

        <View style={styles.textOverlayContainer}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text style={styles.overlayText}>FLOWER</Text>
            <Text style={{ color: "rgb(172, 173, 177)" }}>
              Jessica Gonzalez
            </Text>
            <Image source={require("../assets/4_image/Group 4.png")} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "rgb(172, 173, 177)" }}>0:06</Text>
              <Text style={{ color: "rgb(172, 173, 177)", marginRight: 7 }}>
                3:08
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../assets/4_image/Repeat.png")}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={require("../assets/4_image/Skip to Start.png")}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={require("../assets/4_image/Circled Play.png")}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={require("../assets/4_image/End.png")}
                style={{ width: 30, height: 30 }}
              />
              <View
                style={{ flexDirection: "row", marginTop: 10, marginRight: 10 }}
              >
                <Image
                  source={require("../assets/3_image/Full Stop.png")}
                  style={{ width: 10, height: 10 }}
                />
                <Image
                  source={require("../assets/3_image/Full Stop.png")}
                  style={{ width: 10, height: 10 }}
                />
                <Image
                  source={require("../assets/3_image/Full Stop.png")}
                  style={{ width: 10, height: 10 }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 5,
              marginBottom: 50,
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/4_image/Love.png")}
                  style={{ width: 30, height: 30 }}
                />
                <Text style={{ color: "white", marginTop: 5, marginLeft: 3 }}>
                  12K
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 20 }}>
                <Image
                  source={require("../assets/4_image/Speech Bubble.png")}
                  style={{ width: 30, height: 30 }}
                />
                <Text style={{ color: "white", marginTop: 5, marginLeft: 3 }}>
                  450
                </Text>
              </View>
            </View>
            <Image
              source={require("../assets/4_image/Export.png")}
              style={{ width: 30, height: 30, marginRight: 15 }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: 360,
    height: 680,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Để lớp phủ che toàn bộ hình nền
    backgroundColor: "rgba(0, 0, 0, -0.8)", // Màu đen với độ trong suốt 40%
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  playContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Nền cho chữ 'Play' với độ trong suốt
    padding: 8,
    marginLeft: -20,
    marginRight: -20,
  },
  playText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  textOverlayContainer: {
    position: "absolute",
    bottom: -550,
    left: 10,
    marginLeft: -10,
    marginRight: 100,
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Màu đen với độ trong suốt 60%
  },
  overlayText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Screen4;
