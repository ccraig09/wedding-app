import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../utils/theme";

// Import Screens
import NotesScreen from "../screens/Notes/NotesScreen";
import NoteDetailScreen from "../screens/Notes/NoteDetailScreen";
import AddNoteScreen from "../screens/Notes/AddNoteScreen";

const Stack = createNativeStackNavigator();

export default function NotesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="NotesList"
        component={NotesScreen}
        options={{ title: "Notes" }}
      />
      <Stack.Screen
        name="NoteDetail"
        component={NoteDetailScreen}
        options={{ title: "Note" }}
      />
      <Stack.Screen
        name="AddNote"
        component={AddNoteScreen}
        options={{ title: "Add Note" }}
      />
    </Stack.Navigator>
  );
}
