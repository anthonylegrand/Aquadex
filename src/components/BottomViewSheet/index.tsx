import BottomSheet from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { Keyboard, Text } from "react-native";

import useStore from "../../store/useStore";

export default function BottomViewSheet() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["20%", "50%", "85%"], []);

  const {} = useStore();

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      bottomSheetRef.current?.expand();
    });

    return () => show.remove();
  }, []);

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
      <Text>SOON</Text>
    </BottomSheet>
  );
}
