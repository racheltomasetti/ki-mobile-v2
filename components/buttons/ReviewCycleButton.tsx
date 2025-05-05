import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Flexoki } from "../../theme/colors";

export default function ReviewCycleButton() {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Unlock Cycle Insights</Text>
      <Text style={styles.description}>
        Explore your patterns from this cycle...
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Flexoki.ma[0],
    opacity: 0.75,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    marginTop: 10,
    color: Flexoki.ui,
    fontSize: 16,
    textAlign: "center",
    maxWidth: 320,
    alignSelf: "center",
    fontStyle: "italic",
  },
});
