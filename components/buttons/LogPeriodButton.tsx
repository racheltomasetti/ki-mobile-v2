import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Flexoki } from "../../theme/colors";

export default function LogPeriodButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setShowForm(true)}>
        <Text style={styles.buttonText}>Log Period</Text>
      </TouchableOpacity>
      <Modal
        visible={showForm}
        transparent
        animationType="slide"
        onRequestClose={() => setShowForm(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.placeholderText}>
              [Period Log Form Placeholder]
            </Text>
            <TouchableOpacity
              onPress={() => setShowForm(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Flexoki.re[0],
    opacity: 0.7,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 22,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Flexoki.bg2,
    borderRadius: 12,
    padding: 28,
    alignItems: "center",
    minWidth: 260,
  },
  placeholderText: {
    fontSize: 16,
    color: Flexoki.tx2,
    marginBottom: 18,
  },
  closeButton: {
    backgroundColor: Flexoki.bl[0],
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
