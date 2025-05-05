import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Flexoki } from "../theme/colors";
import LogMealButton from "./buttons/LogMealButton";
import LogMovementButton from "./buttons/LogMovementButton";
import MorningCheckinButton from "./buttons/MorningCheckinButton";
import NightReflectionButton from "./buttons/NightReflectionButton";

function EditJournalButton() {
  return (
    <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editButtonText}>Edit Journal</Text>
    </TouchableOpacity>
  );
}

export default function UserJournal() {
  const now = new Date();
  const hour = now.getHours();
  const isMorning = hour < 17; // before 5pm

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Daily Journal</Text>
          <EditJournalButton />
        </View>
        {isMorning ? <MorningCheckinButton /> : <NightReflectionButton />}
        <LogMovementButton />
        <LogMealButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Flexoki.ui,
  },
  card: {
    backgroundColor: Flexoki.bg2,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 320,
    maxWidth: 340,
    alignSelf: "center",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Flexoki.bl[0],
    textAlign: "left",
    letterSpacing: 0.5,
  },
  editButton: {
    backgroundColor: Flexoki.bl[0],
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 8,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
