import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES, SHADOWS } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { weddingToDoData } from "../data/weddingToDoData";
import { mergeWeddingToDoData } from "../utils/taskUtils";

// If you have multiple data sources, you can merge them.
// For now, we merge a single source to get our initial data.
const mergedData = mergeWeddingToDoData([weddingToDoData]);
const STORAGE_KEY = "weddingToDoTasks";

// Map each category to a custom icon (using Ionicons)
const categoryIcons = {
  Ceremony: "heart-outline",
  Travel: "airplane-outline",
  Details: "information-circle-outline",
  Guests: "people-outline",
  Venue: "home-outline",
  "Photos & Videos": "camera-outline",
  "Food & Drink": "fast-food-outline",
  Beauty: "color-wand-outline",
  Attire: "shirt-outline",
  Music: "musical-notes-outline",
  "Flowers & Decor": "leaf-outline",
  "Invitations & Paper": "document-text-outline",
};

// Define a green-dominant gradient using your theme values.
const greenDominantGradient = [COLORS.primary, COLORS.primary, COLORS.primary];

const CustomProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBarTrack}>
      <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const CategoryTile = ({ category, tasks, onPress }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = totalTasks === 0 ? 0 : completedTasks / totalTasks;
  const iconName = categoryIcons[category] || "apps-outline";

  return (
    <TouchableOpacity onPress={onPress} style={styles.tileWrapper}>
      <LinearGradient
        colors={greenDominantGradient}
        style={styles.categoryTile}
      >
        <Ionicons name={iconName} size={32} color={COLORS.white} />
        <Text style={styles.categoryTitle}>{category}</Text>
        <CustomProgressBar progress={progress} />
        <Text style={styles.progressText}>
          {completedTasks} / {totalTasks} tasks
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const TaskList = ({ tasks, toggleTaskCompletion }) => (
  <FlatList
    data={tasks}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={[styles.taskContainer, item.completed && styles.taskCompleted]}
        onPress={() => toggleTaskCompletion(item.id)}
      >
        <Ionicons
          name={item.completed ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.completed ? COLORS.primary : COLORS.gray}
          style={styles.icon}
        />
        <View>
          <Text
            style={[styles.taskText, item.completed && styles.completedText]}
          >
            {item.task}
          </Text>
          <Text style={styles.dueDate}>Due: {item.dueDate}</Text>
        </View>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
  />
);

const WeddingToDoScreen = () => {
  // Store the entire merged data for categories
  const [tasks, setTasks] = useState(mergedData);
  // Instead of saving a snapshot object, store the selected category name.
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);

  // Load persisted tasks on mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedData !== null) {
          setTasks(JSON.parse(storedData));
        }
      } catch (error) {
        console.log("Error loading tasks", error);
      }
    };

    loadTasks();
  }, []);

  // Persist tasks whenever they change
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (error) {
        console.log("Error saving tasks", error);
      }
    };

    saveTasks();
  }, [tasks]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevCategories) =>
      prevCategories.map((cat) => ({
        ...cat,
        tasks: cat.tasks.map((t) =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        ),
      }))
    );
  };

  // Derive the current category from the latest tasks state.
  const currentCategory = tasks.find(
    (cat) => cat.category === selectedCategoryName
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wedding To-Do List</Text>
      {selectedCategoryName && currentCategory ? (
        <>
          <TouchableOpacity
            onPress={() => setSelectedCategoryName(null)}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
            <Text style={styles.backText}>Back to Categories</Text>
          </TouchableOpacity>
          <TaskList
            tasks={currentCategory.tasks}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        </>
      ) : (
        <ScrollView contentContainerStyle={styles.categoryContainer}>
          {tasks.map((categoryData) => (
            <CategoryTile
              key={categoryData.category}
              category={categoryData.category}
              tasks={categoryData.tasks}
              onPress={() => setSelectedCategoryName(categoryData.category)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  tileWrapper: {
    width: "45%",
    aspectRatio: 1,
    marginBottom: 15,
  },
  categoryTile: {
    flex: 1,
    borderRadius: 16,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.medium,
  },
  categoryTitle: {
    fontSize: SIZES.medium,
    fontWeight: "600",
    color: COLORS.white,
    marginVertical: 5,
    textAlign: "center",
  },
  progressBarTrack: {
    width: "80%",
    height: 8,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 5,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  progressText: {
    fontSize: SIZES.small,
    color: COLORS.white,
    marginTop: 4,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginLeft: 10,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    ...SHADOWS.medium,
  },
  taskCompleted: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 15,
  },
  taskText: {
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: COLORS.gray,
  },
  dueDate: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});

export default WeddingToDoScreen;
