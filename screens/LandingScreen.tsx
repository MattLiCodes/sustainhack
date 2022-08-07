import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

export default function LandingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("./../assets/images/landing.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.LandingScreen}>
        <TouchableOpacity
          style={{
            width: 319,
            height: 46,
            backgroundColor: "transparent",
          }}
          onPress={() => navigation.navigate("Root")}
        ></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  landingText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    color: "#FFFFFF",
  },
  LandingScreen: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 12,
    paddingLeft: 20,
    position: "absolute",
    width: 319,
    height: 46,
    left: 28,
    top: 503,
    backgroundColor: "transparent",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
