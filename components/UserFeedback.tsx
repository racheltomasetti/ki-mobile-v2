import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Flexoki } from "../theme/colors";

export default function UserFeedback() {
  const [feedback, setFeedback] = useState<null | "up" | "down">(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [downFeedback, setDownFeedback] = useState("");
  const [submittedDownFeedback, setSubmittedDownFeedback] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: number | undefined;
    if (feedback === "up" || (feedback === "down" && submittedDownFeedback)) {
      setShowThankYou(true);
      timeout = setTimeout(() => {
        setShowThankYou(false);
        setDone(true);
      }, 3000);
    }
    return () => {
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [feedback, submittedDownFeedback]);

  if (done) return null;
  if (showThankYou) {
    return (
      <View style={styles.container}>
        <Text style={styles.thankYou}>Updating User Profile...</Text>
      </View>
    );
  }
  if (feedback === "up") return null;

  if (feedback === "down" && !submittedDownFeedback) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          How could this response be more useful?
        </Text>
        <TextInput
          style={styles.input}
          value={downFeedback}
          onChangeText={setDownFeedback}
          placeholder="Your feedback..."
          multiline
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => setSubmittedDownFeedback(true)}
          disabled={!downFeedback.trim()}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Was this response helpful?</Text>
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFeedback("up")}
          accessibilityLabel="Thumbs up"
        >
          <Ionicons name="thumbs-up-outline" size={28} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFeedback("down")}
          accessibilityLabel="Thumbs down"
        >
          <Ionicons name="thumbs-down-outline" size={28} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 12,
  },
  label: {
    fontSize: 15,
    color: "#333",
    marginBottom: 8,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 24,
  },
  button: {
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Flexoki.bl[0],
    borderRadius: 6,
    padding: 8,
    minHeight: 40,
    width: 220,
    marginBottom: 12,
    backgroundColor: Flexoki.bg,
    color: Flexoki.tx,
  },
  submitButton: {
    backgroundColor: Flexoki.bl[0],
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  thankYou: {
    fontSize: 15,
    color: Flexoki.bl[0],
    fontWeight: "bold",
  },
});
