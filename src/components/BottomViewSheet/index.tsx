import BottomSheet from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { Keyboard, Text } from "react-native";

import useStore from "../../store/useStore";
import CreatureDetails from "./CreatureDetails";

export default function BottomViewSheet() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "85%"], []);

  const {} = useStore();

  useEffect(() => {
    if (bottomSheetRef) bottomSheetRef.current?.expand();
  }, [bottomSheetRef]);

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      bottomSheetRef.current?.expand();
    });

    return () => show.remove();
  }, []);

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
      <CreatureDetails />
    </BottomSheet>
  );
}
