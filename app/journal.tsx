import React from "react";
import { View } from "react-native";
import UserJournal from "../components/UserJournal";
import { Flexoki } from "../theme/colors";

export default function Journal() {
  // Determine if it's morning/day or night (after 5pm)
  const now = new Date();
  const hour = now.getHours();
  const isMorning = hour < 17; // before 5pm

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Flexoki.ui,
      }}
    >
      <UserJournal />

      {/* <Text
        style={{
          marginTop: 12,
          color: "#666",
          fontSize: 16,
          textAlign: "center",
          paddingHorizontal: 24,
        }}
      >
        The journal is the system's primary input stream, capturing the user's
        thoughts, emotions, and behaviors in context. It exists both as a tool
        for self-awareness and as the foundation for generating personalized,
        AI-driven health guidance.
      </Text> */}
    </View>
  );
}
