import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import useStore from "../../store/useStore";

export default function CreatureDetails() {
  const {} = useStore();

  return (
    <BottomSheetScrollView style={styles.contentContainer}>
      <Text>Le poisson !!</Text>
      <TouchableOpacity onPress={() => console.log("SOON")}>
        <Text>Fermer</Text>
      </TouchableOpacity>
    </BottomSheetScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
