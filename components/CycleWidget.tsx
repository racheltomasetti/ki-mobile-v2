import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Flexoki } from "../theme/colors";
import LogPeriodButton from "./buttons/LogPeriodButton";

export default function CycleWidget() {
  // Placeholder values for now
  const currentDay = 8;
  const currentPhase = "Follicular";

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.infoColumn}>
          <Text style={styles.title}>Cycle: Day {currentDay}</Text>
          <Text style={styles.phase}>Phase: {currentPhase}</Text>
        </View>
        <View style={styles.buttonColumn}>
          <LogPeriodButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Flexoki.bg2,
    borderRadius: 12,
    padding: 18,
    marginBottom: 18,
    marginTop: 18,
    alignSelf: "center",
    elevation: 2,
    width: 340,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoColumn: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonColumn: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Flexoki.bl[0],
    marginBottom: 6,
  },
  phase: {
    fontSize: 16,
    color: Flexoki.tx2,
  },
});
