import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, SHADOWS } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";

// Mock Data (Your current tasks)
const currentTasks = [
  {
    id: "1",
    task: "Book your reception venue",
    dueDate: "Feb 18, 2025",
    completed: false,
  },
  {
    id: "2",
    task: "Decide which vendors you'll need",
    dueDate: "Feb 28, 2025",
    completed: false,
  },
  {
    id: "3",
    task: "Research rehearsal dinner venues",
    dueDate: "Apr 25, 2025",
    completed: false,
  },
  {
    id: "4",
    task: "Schedule rehearsal dinner venue tours",
    dueDate: "Apr 28, 2025",
    completed: false,
  },
  {
    id: "5",
    task: "Book your rehearsal dinner venue",
    dueDate: "May 4, 2025",
    completed: false,
  },
  { id: "6", task: "Order rentals", dueDate: "May 8, 2025", completed: false },
];

// Auto-generated recommendations
const recommendedTasks = [
  {
    id: "7",
    task: "Finalize guest list",
    dueDate: "May 15, 2025",
    completed: false,
  },
  {
    id: "8",
    task: "Send out wedding invitations",
    dueDate: "Jun 1, 2025",
    completed: false,
  },
  {
    id: "9",
    task: "Schedule wedding dress fitting",
    dueDate: "Jun 10, 2025",
    completed: false,
  },
  {
    id: "10",
    task: "Confirm caterer and menu",
    dueDate: "Jun 20, 2025",
    completed: false,
  },
  {
    id: "11",
    task: "Organize seating arrangements",
    dueDate: "Jul 1, 2025",
    completed: false,
  },
  {
    id: "12",
    task: "Book honeymoon accommodations",
    dueDate: "Jul 5, 2025",
    completed: false,
  },
];

const WeddingToDoScreen = () => {
  const [tasks, setTasks] = useState([...currentTasks, ...recommendedTasks]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = ({ item }) => (
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
        <Text style={[styles.taskText, item.completed && styles.completedText]}>
          {item.task}
        </Text>
        <Text style={styles.dueDate}>Due: {item.dueDate}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wedding To-Do List</Text>

      {/* Section for Current Tasks */}
      <Text style={styles.sectionTitle}>✅ Your Tasks</Text>
      <FlatList
        data={currentTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* Section for Recommended Tasks */}
      <Text style={styles.sectionTitle}>🔥 Recommended Tasks</Text>
      <FlatList
        data={recommendedTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 10,
  },
  list: {
    marginBottom: 10,
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
  taskCompleted: {
    backgroundColor: COLORS.lightGray,
  },
});

export default WeddingToDoScreen;
