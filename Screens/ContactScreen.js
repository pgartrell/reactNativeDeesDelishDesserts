import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ContactScreen() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dessertType, setDessertType] = useState("");
  const [contact, setContact] = useState("");

  const logInfo = () => {
    console.log(name);
    console.log(address);
    console.log(dessertType);
    console.log(contact);
  };

  handleNameInput = (e) => {
    setName(e.target.value);
  };
  handleAddressInput = (e) => {
    setAddress(e.target.value);
  };
  handleDessertInput = (e) => {
    setDessertType(e.target.value);
  };
  handleContactInput = (e) => {
    setContact(e.target.value);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <TextInput
            style={styles.input}
            type="text"
            onChange={handleNameInput}
            value={name}
            placeholder="Your Name"
          />
          <TextInput
            style={styles.input}
            type="text"
            onChange={handleAddressInput}
            value={address}
            placeholder="Your Address"
          />
          <TextInput
            style={styles.input}
            type="text"
            onChange={handleDessertInput}
            value={dessertType}
            placeholder="Your Dessert Type"
          />
          <TextInput
            style={styles.input}
            type="text"
            onChange={handleContactInput}
            value={contact}
            placeholder="Your Contact Info"
          />

          <TouchableOpacity
            className="btn btn-large right"
            style={styles.submitButton}
            onPress={logInfo}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    backgroundColor: "pink",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    paddingLeft: 30,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});

export default ContactScreen;
