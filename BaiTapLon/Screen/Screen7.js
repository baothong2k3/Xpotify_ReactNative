import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ScrollView,

} from "react-native";

const Screen6 = (navigate) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ScrollView>

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
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{fontSize: 12, fontWeight: "bold", marginTop: 20,color:"rgb(163, 165, 164)"}}>All</Text>
            <Text style={{fontSize: 12, fontWeight: "bold", marginTop: 20,color:"rgb(163, 165, 164)"}}>Tracks</Text>
            <Text style={{fontSize: 12, fontWeight: "bold", marginTop: 20,color:"rgb(163, 165, 164)"}}>Albums</Text>
            <Text style={{fontSize: 12, fontWeight: "bold", marginTop: 20,color:"rgb(163, 165, 164)"}}>Artists</Text>
        
        </View>

        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
         
          <Image
            source={require("../assets/7_image/Image 85.png")}
            style={{}}
          />
          

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Mer Watson</Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                1.234K Followers
              </Text>
            </View>
            {/* Dòng mô tả */}
          
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
           <TouchableOpacity style={{borderWidth:1,borderRadius:10,width:65,height:28,borderColor:"rgb(210, 211, 215)"}}>
            <View>
                <Text style={{textAlign:"center",color:"rgb(210, 211, 215)"}}>Follow</Text>
            </View>
           </TouchableOpacity>
          </View>
        </View>

        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
        
          <Image
            source={require("../assets/7_image/Image 83.png")}
            style={{}}
          />
           

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Me</Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                Jessica Gonzalez
              </Text>
            </View>
            {/* Dòng mô tả */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 5,
                  marginLeft: -2,
                }}
                source={require("../assets/3_image/Play.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10, color: "#888" }}>
                2,1M
              </Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12, color: "#888" }}>3:36</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/3_image/Image 52.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Me Inc
            </Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                Anthony Taylor
              </Text>
            </View>
            {/* Dòng mô tả */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 5,
                  marginLeft: -2,
                }}
                source={require("../assets/3_image/Play.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10, color: "#888" }}>
                68M
              </Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12, color: "#888" }}>03:35</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/3_image/Image 53.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Dozz me
            </Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>Brian Bailey</Text>
            </View>
            {/* Dòng mô tả */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 5,
                  marginLeft: -2,
                }}
                source={require("../assets/3_image/Play.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10, color: "#888" }}>
                93M
              </Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12, color: "#888" }}>04:39</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/3_image/Image 54.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Eastss me</Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                Anthony Taylor
              </Text>
            </View>
            {/* Dòng mô tả */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 5,
                  marginLeft: -2,
                }}
                source={require("../assets/3_image/Play.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10, color: "#888" }}>
                9M
              </Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12, color: "#888" }}>07:48</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/7_image/Image 88.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Me Ali</Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                Pedro Moreno
              </Text>
            </View>
            {/* Dòng mô tả */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 5,
                  marginLeft: -2,
                }}
                source={require("../assets/3_image/Play.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10, color: "#888" }}>
                23M
              </Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12, color: "#888" }}>3:36</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
        
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/3_image/Image 56.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Me quis a
            </Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                Elena Jumenez
              </Text>
            </View>
            {/* Dòng mô tả */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 5,
                  marginLeft: -2,
                }}
                source={require("../assets/3_image/Play.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10, color: "#888" }}>
                10M
              </Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12, color: "#888" }}>06:22</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/7_image/Image 90.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Me light
            </Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                John Smith
              </Text>
            </View>
            {/* Dòng mô tả */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 5,
                  marginLeft: -2,
                }}
                source={require("../assets/3_image/Play.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10, color: "#888" }}>
                81M
              </Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12, color: "#888" }}>05:15</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}>
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
            <Image
              source={require("../assets/3_image/Full Stop.png")}
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: "rgb(175, 179, 182)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginLeft: -10,
            marginRight: -10,
            paddingVertical: 20,
            marginTop: 10,

          }}
        >
          <View style={{}}>
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
     
    </KeyboardAvoidingView>
    </ScrollView>
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
