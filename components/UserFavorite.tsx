import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Flexoki } from "../theme/colors";

export default function UserFavorite() {
  const [favorited, setFavorited] = useState(false);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setFavorited((f) => !f)}
      accessibilityLabel={
        favorited ? "Unfavorite response" : "Favorite response"
      }
    >
      <Ionicons
        name={favorited ? "star" : "star-outline"}
        size={28}
        color={favorited ? Flexoki.ye[1] : Flexoki.ui3}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: Flexoki.bl[0],
    opacity: 0.6,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
});
