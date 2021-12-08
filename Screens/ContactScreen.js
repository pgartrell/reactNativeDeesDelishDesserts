import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your Name"
      />
      <TextInput
        type="text"
        onChange={handleAddressInput}
        value={address}
        placeholder="Your Address"
      />
      <TextInput
        type="text"
        onChange={handleDessertInput}
        value={dessertType}
        placeholder="Your Dessert Type"
      />
      <TextInput
        type="text"
        onChange={handleContactInput}
        value={contact}
        placeholder="Your Contact Info"
      />
      <Button className="btn btn-large right" onClick={logInfo} title= "Submit">
        "Submit"
      </Button>
    </View>
  );
}

export default ContactScreen;
