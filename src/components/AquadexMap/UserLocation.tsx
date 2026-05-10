import Mapbox from "@rnmapbox/maps";
import * as Location from "expo-location";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";

export default function UserLocation() {
  const router = useRouter();
  const cameraRef = useRef<Mapbox.Camera>(null);
  const hasCentered = useRef(false);
  const [permGranted, setPermGranted] = useState(false);

  useFocusEffect(
    useCallback(() => {
      checkPermission();
    }, [])
  );

  async function checkPermission() {
    const { status } = await Location.getForegroundPermissionsAsync();

    if (status === "granted") {
      setPermGranted(true);
      if (!hasCentered.current) {
        hasCentered.current = true;
        const loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        cameraRef.current?.setCamera({
          zoomLevel: 13,
          centerCoordinate: [loc.coords.longitude, loc.coords.latitude],
          animationMode: "flyTo",
          animationDuration: 1500,
        });
      }
    } else if (status !== "denied") {
      router.push("/(options)/location-permission");
    }
    // denied → la carte reste sur la vue planète
  }

  return (
    <>
      <Mapbox.Camera
        ref={cameraRef}
        zoomLevel={1.5}
        centerCoordinate={[0, 20]}
      />
      {permGranted && (
        <Mapbox.UserLocation
          visible
          showsUserHeadingIndicator
          androidRenderMode="gps"
        />
      )}
    </>
  );
}
