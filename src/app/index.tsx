import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Mapbox from "@rnmapbox/maps";
import useStore from "../store/useStore";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomViewSheet from "../components/BottomViewSheet";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_TOKEN ?? "");

export default function App() {
  const {} = useStore();
  const router = useRouter();

  return (
    <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }}>
      {/* Contenu principal */}
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Light}>
          <Mapbox.Camera zoomLevel={9} centerCoordinate={[2.3522, 48.8566]} />
        </Mapbox.MapView>

        {/* <TouchableOpacity
          style={styles.permButton}
          onPress={() => router.push("/location-permission")}
        >
          <Text style={styles.permButtonText}>Permissions localisation</Text>
        </TouchableOpacity> */}
      </View>

      <BottomViewSheet />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  map: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#e6f0f8",
  },
});
