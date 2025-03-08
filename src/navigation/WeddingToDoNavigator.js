import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../utils/theme";

// Import Screens
import WeddingToDoScreen from "../screens/WeddingToDo/WeddingToDoScreen";

const Stack = createNativeStackNavigator();

export default function WeddingToDoNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="WeddingToDos"
        component={WeddingToDoScreen}
        options={{ title: "Wedding To-Do List" }}
      />
    </Stack.Navigator>
  );
}
