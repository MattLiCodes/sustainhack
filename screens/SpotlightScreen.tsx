import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function SpotlightScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("./../assets/images/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container} />
      <View style={styles.container2}>
        <Text
          style={{
            fontFamily: "Nunito-Regular",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 27,
            color: "#2C524B",
          }}
        >
          Here’s your weekly challenge!
        </Text>
      </View>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: "DaysOne-Regular",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 22,
            lineHeight: 28,
            color: "#2F2F2F",
          }}
        >
          How is a vegan based diet sustainable?
        </Text>
      </View>
      <View style={styles.desc}>
        <Text
          style={{
            fontFamily: "Nunito-Regular",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 18,
            color: "#2C524B",
          }}
        >
          {
            "Livestock farming makes up over 14% of the United States’ greenhouse gas emissions. Aside from improving your physical health and well-being, transitioning to a plant-based diet is one of the most effective ways that you can reduce your carbon footprint. \n\nIn addition, you’ll be protecting the environment through limiting the use of pesticides and protecting land from deforestation and erosion."
          }{" "}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{ color: "#FFFFFF" }}
          onPress={() => navigation.navigate("Selection")}
        >
          Next
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    position: "relative",
    width: 320,
    height: 600,
    left: 27,
    top: 94,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#838383",
    borderStyle: "solid",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  container2: {
    position: "absolute",
    width: 305,
    left: 27,
    height: 17,
    top: 56,
  },
  header: {
    position: "absolute",
    width: 280,
    height: 47,
    left: 49,
    top: 120,
  },
  desc: {
    position: "absolute",
    width: 280,
    height: 259,
    left: 49,
    top: 193,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    position: "absolute",
    width: 319,
    height: 62,
    left: 27,
    top: 659,
    backgroundColor: "#2C524B",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
