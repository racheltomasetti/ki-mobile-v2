import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Flexoki } from "../../theme/colors";

export default function CalendarButton({
  onPress,
  active: activeProp,
}: {
  onPress: () => void;
  active?: boolean;
}) {
  const [active, setActive] = useState(false);
  const isActive = activeProp !== undefined ? activeProp : active;

  const handlePress = () => {
    setActive((prev) => !prev);
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.active]}
      onPress={handlePress}
      accessibilityLabel="Toggle calendar view"
    >
      <Ionicons
        name="calendar"
        size={26}
        color={isActive ? Flexoki.bl[0] : Flexoki.tx2}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    marginRight: 11,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {},
});
