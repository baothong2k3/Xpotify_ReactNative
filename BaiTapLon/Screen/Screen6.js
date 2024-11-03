import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";

const Screen6 = (navigate) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Image
          source={require("../assets/5_image/Cancel.png")}
          style={{position:"absolute", width: 25, height: 25, right: 20, top: 57}}
        />
     

      <View style={styles.listContainer}>
        <Text style={styles.itemText}>Me</Text>
        <Text style={styles.itemText}>me illum id aliquip</Text>
        <Text style={styles.itemText}>me lorem</Text>
        <Text style={styles.itemText}>Me Gonzalez</Text>
        <Text style={styles.itemText}>Me irure esse</Text>
        <Text style={styles.itemText}>Me Exercitation</Text>
        <Text style={styles.itemText}>Me Sint aliquip duis deseru</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 50,
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
});

export default Screen6;
