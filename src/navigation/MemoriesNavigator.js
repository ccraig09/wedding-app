import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../utils/theme";

// Import Screens
import MemoriesScreen from "../screens/Memories/MemoriesScreen";
import MemoryDetailScreen from "../screens/Memories/MemoryDetailScreen";
import AddMemoryScreen from "../screens/Memories/AddMemoryScreen";

const Stack = createNativeStackNavigator();

export default function MemoriesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="MemoriesList"
        component={MemoriesScreen}
        options={{ title: "Memories" }}
      />
      <Stack.Screen
        name="MemoryDetail"
        component={MemoryDetailScreen}
        options={{ title: "Memory" }}
      />
      <Stack.Screen
        name="AddMemory"
        component={AddMemoryScreen}
        options={{ title: "Add Memory" }}
      />
    </Stack.Navigator>
  );
}
