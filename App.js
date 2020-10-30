import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: "Freelance job with Qazi",
      amount: 499.99,
    },
  ]);

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs]);

  const addGig = () => {
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
      },
    ]);

    setDescription("");
    setAmount("");
  };

  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View>
        <Text style={styles.titleText}>
          React Native App for Freelance 🚀🚀🚀
        </Text>
      </View>
      <Text>Total Income: ${total}</Text>
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
        onChangeText={(text) => setAmount(text)}
        keyboardType="number-pad"
      />
      <Button
        disabled={!description && !amount}
        title="Add Gig 🚀"
        onPress={addGig}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gigInput: {
    margin: 20,
    padding: 5,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
});
