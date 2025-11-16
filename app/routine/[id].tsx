import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function RoutineDetails() {
  const params = useLocalSearchParams(); // gets route params as strings
  const router = useRouter();

  // id will be available from the route param
  const { id, title, time } = params as { id?: string; title?: string; time?: string };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Routine Details</Text>
      <Text style={styles.text}>ID: {id}</Text>
      <Text style={styles.text}>Title: {title ?? "—"}</Text>
      <Text style={styles.text}>Time: {time ?? "—"}</Text>

      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  heading: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  text: { fontSize: 18, marginBottom: 8 }
});
