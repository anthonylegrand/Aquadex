import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LocationPermission() {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }}>
      <Text style={styles.title}>Prochainement</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Retour</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
  },
});
