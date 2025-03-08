import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import MemoriesScreen from '../screens/MemoriesScreen';
import MemoryDetailScreen from '../screens/MemoryDetailScreen';
import AddMemoryScreen from '../screens/AddMemoryScreen';
import RemindersScreen from '../screens/RemindersScreen';
import NotesScreen from '../screens/NotesScreen';
import NoteDetailScreen from '../screens/NoteDetailScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import LiveStreamScreen from '../screens/LiveStreamScreen';

// Import theme
import { COLORS } from '../utils/theme';

// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Memories') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'Reminders') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Notes') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'LiveStream') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.lightGray,
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Our Wedding' }} />
      <Tab.Screen name="Memories" component={MemoriesNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Reminders" component={RemindersScreen} options={{ title: 'Reminders' }} />
      <Tab.Screen name="Notes" component={NotesNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="LiveStream" component={LiveStreamScreen} options={{ title: 'Live Stream' }} />
    </Tab.Navigator>
  );
}

// Memories Stack Navigator
function MemoriesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="MemoriesList" component={MemoriesScreen} options={{ title: 'Memories' }} />
      <Stack.Screen name="MemoryDetail" component={MemoryDetailScreen} options={{ title: 'Memory' }} />
      <Stack.Screen name="AddMemory" component={AddMemoryScreen} options={{ title: 'Add Memory' }} />
    </Stack.Navigator>
  );
}

// Notes Stack Navigator
function NotesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="NotesList" component={NotesScreen} options={{ title: 'Notes' }} />
      <Stack.Screen name="NoteDetail" component={NoteDetailScreen} options={{ title: 'Note' }} />
      <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'Add Note' }} />
    </Stack.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}