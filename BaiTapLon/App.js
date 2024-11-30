import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import các màn hình
import Screen1 from "./Screen/Screen1";
import Screen2 from "./Screen/Screen2";
import Screen3 from "./Screen/Screen3";
import Screen4 from "./Screen/Screen4";
import Screen5 from "./Screen/Screen5";
import Screen6 from "./Screen/Screen6";
import Screen7 from "./Screen/Screen7";
import Screen89 from "./Screen/FeedScreen(8-9)";
import Screen10 from "./Screen/MyLibraryScreen(10)";
import Screen11 from "./Screen/PlaylistScreen(11)";
import Screen12 from "./Screen/LaunchScreenPremium(12)";
import Screen13 from "./Screen/SubscriptionPlans(13)";
import ScreenAI from "./Screen/GeminiAI";
// Khởi tạo Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen2"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
        <Stack.Screen name="Screen6" component={Screen6} />
        <Stack.Screen name="Screen7" component={Screen7} />
        <Stack.Screen name="FeedScreen" component={Screen89} />  
        <Stack.Screen name="LibraryScreen" component={Screen10} /> 
        <Stack.Screen name="PlaylistScreen" component={Screen11} /> 
        <Stack.Screen name="PremiumScreen" component={Screen12} /> 
        <Stack.Screen name="SubscriptionScreen" component={Screen13} />
        <Stack.Screen name="ScreenAI" component={ScreenAI} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
