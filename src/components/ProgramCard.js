import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProgramCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{item.university}</Text>
      <Text style={styles.country}>{item.country}</Text>
      <Text numberOfLines={2}>{item.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    elevation: 3
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  country: {
    color: "gray",
    marginBottom: 5
  }
});