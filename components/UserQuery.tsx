import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Markdown from "react-native-markdown-display";
import { Flexoki } from "../theme/colors";
import UserFavorite from "./UserFavorite";
import UserFeedback from "./UserFeedback";

const API_URL = "http://192.168.12.186:5001";

const LOADING_MESSAGES = [
  "Ki is thinking and generating your personalized response...",
  "Consulting the latest health wisdom just for you...",
  "Almost there! Ki is preparing your answer...",
];

const UserQuery = forwardRef((props, ref) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);

  const handleSubmit = async (overrideQuery?: string) => {
    const q = overrideQuery ?? query;
    if (!q.trim()) return;
    setLoading(true);
    setResponseMsg("");
    try {
      const response = await fetch(`${API_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: q }),
      });
      const data = await response.json();
      console.log("API response:", data);
      setResponseMsg(data.message || JSON.stringify(data));
    } catch (error) {
      console.error("Error submitting query:", error);
      Alert.alert("Error", "Failed to submit query.");
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  useImperativeHandle(ref, () => ({
    submitPrompt: (prompt: string) => {
      setQuery(prompt);
      handleSubmit(prompt);
    },
  }));

  useEffect(() => {
    let interval: number | undefined;
    if (loading) {
      setLoadingMsgIndex(0);
      interval = setInterval(() => {
        setLoadingMsgIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 2700);
    } else {
      setLoadingMsgIndex(0);
    }
    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [loading]);

  return (
    <View style={styles.card}>
      {responseMsg ? null : (
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="What's on your mind?"
          editable={!loading && !responseMsg}
          multiline
          textAlignVertical="top"
        />
      )}
      {loading ? (
        <>
          <Text style={styles.loadingText}>
            {LOADING_MESSAGES[loadingMsgIndex]}
          </Text>
          <ActivityIndicator style={{ marginTop: 8 }} />
        </>
      ) : responseMsg ? null : (
        <TouchableOpacity
          style={styles.askKiButton}
          onPress={() => handleSubmit()}
          disabled={loading}
        >
          <Text style={styles.askKiButtonText}>Ask Ki</Text>
        </TouchableOpacity>
      )}
      {responseMsg ? (
        <>
          <ScrollView
            style={styles.responseScroll}
            contentContainerStyle={styles.responseContent}
          >
            <Markdown style={markdownStyles}>{responseMsg}</Markdown>
          </ScrollView>
          <View style={styles.feedbackRow}>
            <UserFeedback />
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => {
                setResponseMsg("");
                setQuery("");
              }}
            >
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
            <UserFavorite />
          </View>
        </>
      ) : null}
    </View>
  );
});

export default UserQuery;

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
    maxWidth: 360,
    minWidth: 360,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    minHeight: 40,
    maxHeight: 120,
    marginBottom: 12,
    width: 328,
  },
  askKiButton: {
    backgroundColor: Flexoki.bl[0],
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
    width: "100%",
  },
  askKiButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  responseScroll: {
    maxHeight: 610,
    marginTop: 12,
  },
  responseContent: {
    flexGrow: 1,
  },
  loadingText: {
    textAlign: "center",
    color: Flexoki.bl[0],
    fontSize: 15,
    marginTop: 8,
    fontStyle: "italic",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: 16,
    width: "100%",
  },
  clearButton: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  clearButtonText: {
    color: "#4F8EF7",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  feedbackRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    width: "100%",
    marginTop: 8,
  },
});

const markdownStyles = {
  body: { color: "#333", fontSize: 16, marginHorizontal: 16 },
  strong: { fontWeight: "bold" as "bold" },
  em: { fontStyle: "italic" as "italic" },
  // Add more custom styles as needed
};
