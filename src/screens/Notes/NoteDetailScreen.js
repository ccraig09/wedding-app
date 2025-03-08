import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../utils/theme";
import moment from "moment";

const NoteDetailScreen = ({ route }) => {
  const { note } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.date}>
          {moment(note.date).format("MMMM D, YYYY")}
        </Text>
        <Text style={styles.noteContent}>{note.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    margin: 20,
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    ...SHADOWS.medium,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 10,
  },
  date: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 20,
  },
  noteContent: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    lineHeight: 24,
  },
});

export default NoteDetailScreen;
