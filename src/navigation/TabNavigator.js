import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../utils/theme";

// Import Screens
import HomeScreen from "../screens/Home/HomeScreen";
import MemoriesNavigator from "./MemoriesNavigator";
import NotesNavigator from "./NotesNavigator";
import WeddingToDoNavigator from "./WeddingToDoNavigator";
import LiveStreamScreen from "../screens/LiveStream/LiveStreamScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Memories") {
            iconName = focused ? "images" : "images-outline";
          } else if (route.name === "Notes") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "LiveStream") {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (route.name === "ToDos") {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.lightGray,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "#Craiginlove" }}
      />
      <Tab.Screen
        name="Memories"
        component={MemoriesNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notes"
        component={NotesNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="LiveStream"
        component={LiveStreamScreen}
        options={{ title: "Live Stream" }}
      />
      <Tab.Screen
        name="ToDos"
        component={WeddingToDoNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
