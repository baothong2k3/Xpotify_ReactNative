import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet
} from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nội dung cuộn */}
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "20%" }} // Để tránh nội dung bị chồng lên Bottom Navigation
      >
        {/* Header */}
        <View style={{ margin: "4%", marginTop: "10%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/2_image/Image 36.png")} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "25%",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("../assets/2_image/Notification.png")}
                style={{ width: 30, height: 30 }}
              />
              <Image source={require("../assets/2_image/Avatar 3.png")} />
            </View>
          </View>

          {/* Greeting */}
          <View>
            <Text style={{ fontSize: 16, color: "#666" }}>Good morning,</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Ashley Scott
            </Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Image
              source={require("../assets/2_image/Search.png")}
              style={{ width: 20, height: 20 }}
            />
            <TextInput
              placeholder="What you want to listen to"
              style={{ flex: 1, fontSize: 16 }}
            />
          </View>
        </View>

        {/* Suggestions for you */}
        <View style={{ margin: "4%", marginTop: "2%" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: '2%' }}>Suggestions for you</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* Các hình ảnh */}
            <Image
              source={require("../assets/2_image/Container 26.png")}
              style={{}}
            />
            <View style={{ paddingHorizontal: '15' }}>
              <Image
                source={require("../assets/2_image/Container 27.png")}
                style={{}}
              />
            </View>
            <Image
              source={require("../assets/2_image/Container 27.png")}
              style={{}}
            />
          </ScrollView>
        </View>
        {/* Charts */}
        <View style={{ margin: "4%", marginTop: "2%" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: '2%' }}>Charts</Text>
            <Text style={{ color: "#aaa" }}>See all</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
                <Image
                  source={require("../assets/2_image/Container 31.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingHorizontal: '15' }}>
                <Image
                  source={require("../assets/2_image/Container 32.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../assets/2_image/Container 33.png")}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Trending Albums */}
        <View style={{ margin: "4%", marginTop: "2%" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: '2%' }}>Trending albums</Text>
            <Text style={{ color: "#aaa" }}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{}}>
              <Image
                source={require("../assets/2_image/Image 45.png")}
              />
              <Text style={{ fontWeight: "bold", marginVertical: '3%' }}>ME</Text>
              <Text style={{ color: "#aaa" }}>Jessica Gonzalez</Text>
            </View>
            <View style={{ paddingHorizontal: '15' }}>
              <Image
                source={require("../assets/2_image/Image 46.png")}
              />
              <Text style={{ fontWeight: "bold", marginVertical: '3%' }}>Magna nost</Text>
              <Text style={{ color: "#aaa" }}>Brian Thomas</Text>
            </View>
          </ScrollView>
        </View>
        {/*Popular artists */}
        <View style={{ margin: "4%", marginTop: "2%" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: '2%' }}>Popular artists</Text>
            <Text style={{ color: "#aaa" }}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require("../assets/2_image/Image 39.png")}
              />
              <Text style={{ fontWeight: "#666", textAlign: 'center', marginVertical: '8%' }}>Jennifer Wilson</Text>
              <TouchableOpacity style={{
                width: '50%',
                backgroundColor: 'black',
                borderRadius: 15,
                alignSelf: 'center',
                height: 30,
                justifyContent: 'center'
              }}>
                <Text style={{ textAlign: 'center', color: '#ffff' }}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: '20' }}>
              <Image
                source={require("../assets/2_image/Image 40.png")}
              />
              <Text style={{ fontWeight: "#666", textAlign: 'center', marginVertical: '8%' }}>Elizabeth Hall</Text>
              <TouchableOpacity style={{
                width: '50%',
                backgroundColor: 'black',
                borderRadius: 15,
                alignSelf: 'center',
                height: 30,
                justifyContent: 'center'
              }}>
                <Text style={{ textAlign: 'center', color: '#ffff' }}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require("../assets/2_image/Image 41.png")}
              />
              <Text style={{ fontWeight: "#666", textAlign: 'center', marginVertical: '8%' }}>Antony Matheus</Text>
              <TouchableOpacity style={{
                width: '50%',
                backgroundColor: 'black',
                borderRadius: 15,
                alignSelf: 'center',
                height: 30,
                justifyContent: 'center'
              }}>
                <Text style={{ textAlign: 'center', color: '#ffff' }}>Follow</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
          <Icon name="home-outline" size={24} color="#54aeff" />
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
          <Icon name="library-outline" size={24} color="#000" />
          <Text style={styles.navText}>Library</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
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
});
export default Screen2;