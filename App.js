import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import GlobalStyles from "./GlobalStyles";
import Graph from "./components/Graph";

export default function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [labels, setLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);

  const [gigs, setGigs] = useState([
    {
      description: "Freelance job with Qazi",
      amount: 499.99,
      timestamp: new Date(),
    },
    {
      description: "Small Project",
      amount: 340,
      timestamp: new Date(2020, 10, 29),
    },
    {
      description: "React gig",
      amount: 850,
      timestamp: new Date(2020, 11, 1),
    },
  ]);

  useEffect(() => {
    let data = {};
    gigs.map((gig) => {
      const date = gig.timestamp.toDateString();
      if (!(date in data)) {
        data[date] = gig.amount;
      } else {
        data[date] += gig.amount;
      }
    });

    console.log("DATA", data);

    setLabels(Object.keys(data).sort());
    setDataPoints(
      Object.keys(data)
        .sort()
        .map((key) => data[key])
    );
  }, [gigs]);

  console.log("LABELS", labels);
  console.log("DATAPOINTS", dataPoints);

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs]);

  const addGig = () => {
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
        timestamp: new Date(),
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

      {gigs.map((gig) => (
        <>
          <Text>{gig.description}:</Text>
          <Text>${gig.amount}</Text>
        </>
      ))}

      <Graph labels={labels} dataPoints={dataPoints} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gigInput: {
    margin: 20,
    padding: 10,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
});
