import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TextInputComponent,
} from "react-native";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: "Freelance job with Qazi",
      amount: 499.99,
    },
  ]);

  const addGig = () =>
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
      },
    ]);

  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View>
        <Text style={styles.titleText}>React Native App for Freelance</Text>
      </View>
      <TextInput
        style={styles.gigInput}
        value={description}
        placeholder="Enter a description"
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.gigInput}
        value={amount}
        placeholder="Enter the amount you made in $ (USD)"
        onChangeText={(text) => setInput(text)}
        keyboardType="number-pad"
      />
      <Button title="Add Gig 🚀" onPress={addGig} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gigInput: {
    margin: 20,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
});
