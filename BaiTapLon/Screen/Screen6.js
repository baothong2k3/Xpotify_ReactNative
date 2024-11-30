import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
const Screen6 = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{}}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen7")}><Text style={styles.itemText}>Me</Text></TouchableOpacity>
          <Text style={styles.itemText}>me illum id aliquip</Text>
          <Text style={styles.itemText}>me lorem</Text>
          <Text style={styles.itemText}>Me Gonzalez</Text>
          <Text style={styles.itemText}>Me irure esse</Text>
          <Text style={styles.itemText}>Me Exercitation</Text>
          <Text style={styles.itemText}>Me Sint aliquip duis deseru</Text>
        </View>
      </KeyboardAvoidingView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("Screen2")}>
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("Screen6")}>
          <Icon name="search-outline" size={24} color="#54aeff" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("FeedScreen")}>
          <Icon name="list-outline" size={24} color="#000" />
          <Text style={styles.navText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("LibraryScreen")}>
          <Icon name="library-outline" size={24} color="#000" />
          <Text style={styles.navText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("ScreenAI")}>
          <Icon name="chatbubble-ellipses-outline" size={24} color="#000" />
          <Text style={styles.navText}>GeminiAI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 50,
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: "#00BFFF", // Màu xanh nhạt cho viền
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  listContainer: {
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop: 5,
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

export default Screen6;
