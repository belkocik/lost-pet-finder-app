import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuthStore } from "@/store/authStore";
import { Button } from "react-native-paper";
import Container from "@/components/Container";
import { Stack } from "expo-router";
import { ExploreHeader } from "@/components/ExploreHeader";
import { useState } from "react";
import Listings from "@/components/Listings";

export default function HomeScreen() {
  const onLogout = useAuthStore((state) => state.onLogout);

  const [category, setCategory] = useState("Cat");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <Container withHeader>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <View>
        <Listings listings={[]} category={category} />
      </View>
    </Container>
  );
}
