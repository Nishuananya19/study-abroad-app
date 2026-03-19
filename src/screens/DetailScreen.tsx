import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

// 1. Define Program type
type Program = {
  id: number;
  university: string;
  country: string;
  description: string;
  details: string;
};

// 2. Define Navigation Param List
type RootStackParamList = {
  Details: { program: Program };
};

// 3. Type the route
type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type Props = {
  route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: Props) {
  const { program } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{program.university}</Text>
      <Text style={styles.country}>{program.country}</Text>
      <Text style={styles.details}>{program.details}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  country: {
    fontSize: 16,
    color: "gray",
    marginVertical: 10,
  },
  details: {
    fontSize: 14,
    lineHeight: 20,
  },
});