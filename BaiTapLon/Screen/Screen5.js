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

const Screen3 = ({ navigation }) => {
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/3_image/Back.png")}
          />
          </TouchableOpacity>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/3_image/Wired Network Connection.png")}
          />
        </View>
        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/3_image/Container 31.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Top 50 - Canada
            </Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Image
                style={{ width: 16, height: 16, marginRight: 5 }}
                source={require("../assets/3_image/Love1.png")}
              />
              <Text style={{ fontSize: 12, marginRight: 10 }}>1,234</Text>
              <Image
                style={{ width: 15, height: 15, marginRight: 10 }}
                source={require("../assets/3_image/Full Stop.png")}
              />
              <Text style={{ fontSize: 12 }}>05:10:18</Text>
            </View>

            {/* Dòng mô tả */}
            <Text style={{ fontSize: 12, color: "#888" }}>
              Daily chart-toppers update
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/3_image/Love.png")}
              style={{ width: 20, height: 20 }}
            />
            <View
              style={{ flexDirection: "row", marginLeft: 25, marginTop: 4 }}
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
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/3_image/End.png")}
              style={{ width: 20, height: 20, marginRight: 20, marginTop: 2 }}
            />
            <Image
              source={require("../assets/3_image/Icon Button 2.png")}
              style={{ width: 25, height: 25 }}
            />
          </View>
        </View>

        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <TouchableOpacity onPress={() => navigation.navigate("Screen4")}>
          <Image
            source={require("../assets/3_image/Image 51.png")}
            style={{}}
          />
            </TouchableOpacity>

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>FLOWER</Text>

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
              Shape of you
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
              Blinding Lights
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
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Levitating</Text>

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
            source={require("../assets/3_image/Image 55.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Astronaut in the Ocean
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
              Dynamite
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
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center",backgroundColor:"black",marginLeft:-10,marginRight:-10 }}
        >
          {/* Hình ảnh chính */}
          <Image
            source={require("../assets/3_image/Image 57.png")}
            style={{}}
          />

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold",color:"rgb(241, 243, 244)" }}>
              FLOWER
            </Text>
            <Text style={{ fontSize: 12, color:"rgb(241, 243, 244)" }}>
                Me  Jessica Gonzalez
              </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 25,marginBottom:20 }}>
            <Image  source={require("../assets/3_image/Love3.png")} style={{ width: 20, height: 20, marginRight: 5, marginLeft: -2,position:"absolute",right: 50,borderColor:"white" }} />
            <Image  source={require("../assets/3_image/Play1.png")} style={{ width: 20, height: 20, marginRight: 5, marginLeft: -2,position:"absolute",right: 10,borderColor:"white" }} />
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: "rgb(175, 179, 182)",
            display: "flex",
            flexDirection: "row",
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
export default Screen3;
