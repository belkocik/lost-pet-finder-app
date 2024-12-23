import { Platform, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "./Colors";

export const FOOTER_HEIGHT = Platform.OS === "ios" ? 100 : 80;

export const useDefaultStyles = () => {
  const colorScheme = useColorScheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[colorScheme ?? "light"]?.background,
    },
    content: {
      backgroundColor: Colors[colorScheme ?? "light"]?.background,
    },
    footer: {
      position: "absolute",
      height: FOOTER_HEIGHT,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: Colors[colorScheme ?? "light"]?.background,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderTopColor: Colors[colorScheme ?? "light"]?.border,
      borderTopWidth: StyleSheet.hairlineWidth,
    },
  });
};
