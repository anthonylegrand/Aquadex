import Mapbox from "@rnmapbox/maps";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { StyleSheet } from "react-native";

import { DEFAULT_MAP_STYLE } from "../../constants";

export default function AquadexMap() {
  const router = useRouter();
  const cameraRef = useRef<Mapbox.Camera>(null);

  return (
    <Mapbox.MapView
      style={styles.map}
      styleURL={Mapbox.StyleURL.Outdoors || DEFAULT_MAP_STYLE}
      scaleBarEnabled={false}
    >
      <Mapbox.Camera
        ref={cameraRef}
        zoomLevel={1.5}
        centerCoordinate={[0, 20]}
      />
    </Mapbox.MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    // borderRadius: 12,
    // overflow: "hidden",
  },
});
