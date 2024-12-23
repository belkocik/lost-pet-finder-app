import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { toast } from "@backpackapp-io/react-native-toast";
import { useTranslation } from "react-i18next";

type Props = {
  listings: unknown;
};

type Cords = {
  latitude: number;
  longitude: number;
  longitudeDelta: number;
  latitudeDelta: number;
};

const ListingsMap = ({ listings }: Props) => {
  const [location, setLocation] = useState<Cords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { t } = useTranslation();

  console.log("🚀 ~ ListingsMap ~ location:", location);
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const cords: Cords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          longitudeDelta: 0.0922,
          latitudeDelta: 0.0421,
        };
        setLocation(cords);
      } catch (error) {
        toast.error(t("turnInLocationToUseAppFunctions"));
        console.log("🚀 ~ error in request location:", error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        // provider={PROVIDER_GOOGLE} // todo: apply google api key to use it on ios and you have to put the google api key if you want to deploy the app to app store/play store
        showsUserLocation
        showsMyLocationButton
        initialRegion={location ?? undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListingsMap;
