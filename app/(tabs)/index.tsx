import MapLibreGL from "@maplibre/maplibre-react-native";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  void MapLibreGL.setAccessToken(null);

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    },
    map: {
      flex: 1,
      alignSelf: "stretch",
    },
  });

  return (
    <View style={styles.page}>
      <MapLibreGL.MapView
        style={styles.map}
        logoEnabled={false}
        styleURL="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
      >
        <View />
      </MapLibreGL.MapView>
    </View>
  );
}
