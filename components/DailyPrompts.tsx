import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Flexoki } from "../theme/colors";

const EXAMPLE_PROMPTS = [
  {
    bold: "Create a one-week meal plan and grocery list",
    rest: " tailored to my cycle that prioritizes whole foods and sustained energy.",
  },
  {
    bold: "Create a personalized two-week workout plan",
    rest: " based on my current cycle day that balances movement variety, consistency, and recovery needs.",
  },
  {
    bold: "Help me schedule my deep work sessions",
    rest: " over the next three weeks to align with my cycle-based energy and focus patterns.",
  },
];

export default function DailyPrompts({
  onPromptSelect,
}: {
  onPromptSelect: (prompt: string) => void;
}) {
  const [visible, setVisible] = useState(true);

  const handlePrompt = (prompt: string) => {
    onPromptSelect(prompt);
    setVisible(false);
  };

  if (!visible) {
    return (
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.toggleButtonText}>Show Daily Prompts</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Daily Prompts</Text>
      {EXAMPLE_PROMPTS.map((prompt, idx) => {
        // Assign a border color based on the prompt
        let borderColor = Flexoki.ma[0]; // pink
        if (idx === 1) borderColor = Flexoki.gr[0]; // green
        if (idx === 2) borderColor = Flexoki.pu[0]; // purple
        return (
          <TouchableOpacity
            key={idx}
            style={[
              styles.promptButton,
              {
                borderColor,
                borderWidth: 2,
                backgroundColor: Flexoki.bg,
              },
            ]}
            onPress={() => handlePrompt(prompt.bold + prompt.rest)}
          >
            <Text style={styles.promptText}>
              <Text style={styles.boldText}>{prompt.bold}</Text>
              {prompt.rest}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Flexoki.bg,
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: Flexoki.bl[0],
  },
  promptButton: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  promptText: {
    color: "#333",
    fontSize: 15,
  },
  boldText: {
    fontWeight: "bold",
    color: "#222",
  },
  toggleContainer: {
    alignItems: "center",
    margin: 24,
    minHeight: 60,
    justifyContent: "center",
  },
  toggleButton: {
    backgroundColor: Flexoki.ma[0],
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});
