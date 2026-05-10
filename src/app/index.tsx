import { useRouter } from "expo-router";
import { View } from "react-native";
import Mapbox from "@rnmapbox/maps";
import useStore from "../store/useStore";

import BottomViewSheet from "../components/BottomViewSheet";
import AquadexMap from "../components/AquadexMap";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_TOKEN ?? "");

export default function App() {
  const {} = useStore();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* Contenu principal */}
      <AquadexMap />

      <BottomViewSheet />
    </View>
  );
}
