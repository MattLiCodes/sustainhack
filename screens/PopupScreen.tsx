import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { addTaskCount } from "./../redux/actions";
import { useDispatch } from "react-redux";

export default function PopupScreen({ navigation }: any) {
  const dispatch = useDispatch();
  return (
    <ImageBackground
      source={require("./../assets/images/popup.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.LandingScreen}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 46,
            marginRight: 50,
            backgroundColor: "transparent",
          }}
          onPress={() => {
            navigation.navigate("Root");
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 46,
            marginLeft: 0,
            backgroundColor: "transparent",
          }}
          onPress={() => {
            dispatch(addTaskCount(4, 1));
            navigation.navigate("Root");
          }}
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
    top: 523,
    backgroundColor: "transparent",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
