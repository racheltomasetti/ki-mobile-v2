import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Flexoki } from "../theme/colors";

export default function FavoriteNotes() {
  // Placeholder notes for UI demonstration
  const notes = [
    {
      id: 1,
      title: "This Week's Meal Plan",
      content:
        "You are currently in the luteal phase of your cycle. This is a great time to focus on building muscle and strength. Here is a meal plan to help you do just that...",
    },
    {
      id: 2,
      title: "This Week's Workout Routine",
      content:
        "Based on your cycle, energy levels, and fitness goals, here is a workout plan to align your movement with your body...",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Saved Plans</Text>
      <ScrollView style={styles.notesList}>
        {notes.map((note) => (
          <View key={note.id} style={styles.noteCard}>
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text style={styles.noteContent}>{note.content}</Text>
            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton}>
                <Text style={styles.actionButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Flexoki.bg,
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    maxWidth: 360,
    minWidth: 360,
    alignSelf: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: Flexoki.bl[0],
    textAlign: "left",
  },
  notesList: {
    maxHeight: 300,
  },
  noteCard: {
    backgroundColor: Flexoki.bg2,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 1,
  },
  noteTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: Flexoki.tx,
  },
  noteContent: {
    fontSize: 14,
    color: Flexoki.tx2,
    marginBottom: 8,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
  },
  actionButton: {
    backgroundColor: Flexoki.bl[0],
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginLeft: 8,
    opacity: 0.75,
  },
  removeButton: {
    backgroundColor: Flexoki.re[0],
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    opacity: 0.75,
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
