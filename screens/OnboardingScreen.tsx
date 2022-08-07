import { Text, View, Button } from "react-native";

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View>
      <Text style={{ color: "white" }}>Onboarding Screens</Text>
      <Button title="Go" onPress={() => navigation.navigate("Spotlight")} />
    </View>
  );
}
