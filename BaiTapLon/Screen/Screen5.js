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

const Screen5 = ({ navigation }) => {
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
        </View>
        <Image
          style={{ marginLeft: 50 }}
          source={require("../assets/5_image/Image 63.png")}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign:"center" }}>Ryan Young </Text>
        <Text style={{ fontSize: 12, color: "#888", textAlign:"center" }}>65.1K Followers</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{borderWidth:1,borderRadius:10,width:80,height:28,}}>
                <View>
                    <Text style={{ fontSize: 12, color: "#888", textAlign:"center",marginTop:3 }}>Follow</Text>
                </View>
            </TouchableOpacity>
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
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        ></View>

        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          {/* Hình ảnh chính */}
          <TouchableOpacity onPress={() => navigation.navigate("Screen4")}>
            <Image
              source={require("../assets/5_image/Image 66.png")}
              style={{}}
            />
          </TouchableOpacity>

          {/* Nội dung bên phải hình ảnh */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            {/* Tên */}
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Let you free</Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>
                Ryan Young
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
            source={require("../assets/5_image/Image 67.png")}
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
              <Text style={{ fontSize: 12, color: "#888" }}>
                Ryan Young
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
              <Text style={{ fontSize: 12, color: "#888" }}>Pedro Moreno</Text>
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
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Dynamite</Text>

            {/* Dòng biểu tượng yêu thích, số lượng và thời gian */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: "#888" }}>Elena Jumenez</Text>
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
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Albums
          </Text>
          
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View>
            <Image
              style={{}}
              source={require("../assets/5_image/Image 71.png")}
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
              source={require("../assets/5_image/Image 72.png")}
            />
            <Text style={{}}>
              Magna nost{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)" }}>Brian Thomas</Text>
            </Text>
          </View>
          <View>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/5_image/Image 77.png")}
            />
            <Text style={{}}>
              Procident Simen{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)" }}>
                Jessica josep
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
            About
          </Text>        
        </View>
          <Image style={{marginTop:10}} source={require("../assets/5_image/Image 73.png")} />
          <Text style={{ color: '#808080',marginTop:5 }}>Do in cupidatat aute et in officia aute laboris est{"\n"}Lorem est nisi dolor consequat voluptate duis irure.
          Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit. Do ea n</Text>
          <Text style={{textAlign:"center",color:"rgb(129, 205, 214)",fontWeight:"bold",marginTop:5}}>View more</Text>

          <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Fans also like
          </Text>
          <Text style={{ fontSize: 15, color: "rgb(170, 172, 173)" }}>
            See all
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View>
            <Image
              style={{}}
              source={require("../assets/5_image/Image 74.png")}
            />
            <Text style={{}}>
              Magna nost{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)" }}>
                Jessical Gonzalez
              </Text>
            </Text>
          </View>
          <View>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/5_image/Image 75.png")}
            />
            <Text style={{}}>
              Exercitatio{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)" }}>Brian Thomas</Text>
            </Text>
          </View>
          <View>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/5_image/Image 76.png")}
            />
            <Text style={{}}>
              Tempor uniters{"\n"}
              <Text style={{ color: "rgb(170, 172, 173)", }}>
                Tyler Anddst
              </Text>
            </Text>
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
      </View>
    </ScrollView>
  );
};
export default Screen5;
