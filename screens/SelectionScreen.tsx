import { Text, View, Button } from "react-native";

export default function SelectionScreen({ navigation }: any) {
  return (
    <View>
      <Text style={{ color: "white" }}>Selection Screen</Text>
      <Button title="Go" onPress={() => navigation.navigate("TasksScreen")} />
    </View>
  );
}
