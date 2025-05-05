import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import DailyPrompts from "../components/DailyPrompts";
import UserQuery from "../components/UserQuery";
import { Flexoki } from "../theme/colors";

export default function Index() {
  const userQueryRef = useRef<any>(null);

  const handlePromptSelect = (prompt: string) => {
    if (userQueryRef.current && userQueryRef.current.submitPrompt) {
      userQueryRef.current.submitPrompt(prompt);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Flexoki.ui,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%" }}>
          <UserQuery ref={userQueryRef} />
          <DailyPrompts onPromptSelect={handlePromptSelect} />
        </View>
      </ScrollView>
    </View>
  );
}
