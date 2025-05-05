import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Flexoki } from "../../theme/colors";

export default function ViewDailyInsightsButton() {
  return (
    <TouchableOpacity style={styles.button} disabled>
      <View style={styles.contentRow}>
        <Ionicons
          name="lock-closed-outline"
          size={22}
          color="#fff"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.buttonText}>
          Complete your morning check in to unlock today's insights
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Flexoki.tx,
    opacity: 0.3,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: "center",
    marginBottom: 18,
    alignSelf: "center",
    elevation: 2,
    minWidth: 320,
    maxWidth: 340,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    flexShrink: 1,
  },
});
