import { Text, View, Button } from "react-native";

export default function SpotlightScreen({ navigation }: any) {
  return (
    <View>
      <Text style={{ color: "white" }}>Spotlight Screen</Text>
      <Button title="Go" onPress={() => navigation.navigate("Selection")} />
    </View>
  );
}
