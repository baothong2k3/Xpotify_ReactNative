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
const Screen2 = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../assets/2_image/Image 36.png")} />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{ width: 30, height: 30, marginRight: 10, marginTop: 4 }}
              source={require("../assets/2_image/Notification.png")}
            />
            <Image source={require("../assets/2_image/Avatar 3.png")} />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 12 }}>Good morning,</Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
          Ashley Scott
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginTop: 4 }}
            source={require("../assets/2_image/Search.png")}
          />
          <TextInput placeholder="What you want to listen to" />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
          Suggestions for you
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
         
          <Image
            style={{}}
            source={require("../assets/2_image/Container 26.png")}
          />
          
          <Image
            style={{}}
            source={require("../assets/2_image/Container 27.png")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Charts</Text>
          <Text style={{ fontSize: 15, color: "rgb(170, 172, 173)" }}>
            See all
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View>
          <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
          <Image
              style={{}}
              source={require("../assets/2_image/Container 31.png")}
            />
            </TouchableOpacity>
            
            <Text style={{ color: "rgb(170, 172, 173)" }}>
              Daily chart-toppers{"\n"}update
            </Text>
          </View>
          <View>
            <Image
              style={{}}
              source={require("../assets/2_image/Container 32.png")}
            />
            <Text style={{ color: "rgb(170, 172, 173)" }}>
              Daily chart-toppers{"\n"}update
            </Text>
          </View>
          <View>
            <Image
              style={{}}
              source={require("../assets/2_image/Container 33.png")}
            />
            <Text style={{ color: "rgb(170, 172, 173)" }}>
              Daily chart-toppers{"\n"}update
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Trending albums
          </Text>
          <Text style={{ fontSize: 15, color: "rgb(170, 172, 173)" }}>
            See all
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View>
            <Image
              style={{}}
              source={require("../assets/2_image/Image 45.png")}
            />
            <Text style={{}}>
              ME{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)" }}>
                Jessical Gonzalez
              </Text>
            </Text>
          </View>
          <View>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/2_image/Image 46.png")}
            />
            <Text style={{}}>
              Magna nost{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)" }}>Brian Thomas</Text>
            </Text>
          </View>
          <View>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/2_image/Image 47.png")}
            />
            <Text style={{}}>
              Magna nost{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)" }}>
                Christop Template
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Popular artists
          </Text>
          <Text style={{ fontSize: 15, color: "rgb(170, 172, 173)" }}>
            See all
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View>
            <Image
              style={{}}
              source={require("../assets/2_image/Image 39.png")}
            />
            <Text style={{ textAlign: "center" }}>Jennifer Wilson</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                width: 60,
                height: 30,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 38,
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/2_image/Image 40.png")}
            />
            <Text style={{ textAlign: "center" }}>Elizabeth Hall</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                width: 60,
                height: 30,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 38,
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/2_image/Image 41.png")}
            />
            <Text style={{ textAlign: "center" }}>Anthor Wilson</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                width: 60,
                height: 30,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 38,
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: "rgb(175, 179, 182)",
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-around",
            marginLeft:-10,
            marginRight:-10,
            paddingVertical:10
          }}
        >
          <View>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/2_image/Home.png")}
            />
            <Text style={{ textAlign: "center", fontSize: 10, marginLeft: -3 }}>
              Home
            </Text>
          </View>
          <View>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/2_image/Search.png")}
            />
            <Text style={{ textAlign: "center", fontSize: 10, marginLeft: -3 }}>
              Search
            </Text>
          </View>
          <View>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/2_image/Activity Feed.png")}
            />
            <Text style={{ textAlign: "center", fontSize: 10 }}>Feed</Text>
          </View>
          <View>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/2_image/book1.png")}
            />
            <Text style={{ textAlign: "center", fontSize: 10, marginLeft: -3 }}>
              Library
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen2;
