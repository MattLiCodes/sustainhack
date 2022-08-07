import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";
import {ScrollView, StyleSheet, Text, View, Button } from "react-native";

export default function SelectionScreen({ navigation }: any) {
  return (
    <View style= {{backgroundColor: "#E3F9BA","position": "relative",
    "width": 375,
    "height": 812}}>
    <View style={styles.container}>  </View>
      <View style={styles.header}>
        <Text style={{"fontFamily": "DaysOne-Regular",
          "fontStyle": "normal",
          "fontWeight": "400",
          "fontSize": 22,
          "lineHeight": 28,
          "color": "#000000"}}>
            Customize Your Week </Text>
      </View>
      <View style = {styles.add}>
        <Text style={{
            "width": 240,
            "height": 22,
            "fontFamily": "Nunito",
            "fontStyle": "normal",
            "fontWeight": "700",
            "fontSize": 16,
            "lineHeight": 22,
            "textAlign": "center",
            "color": "#FFFFFF",
            "flexGrow": 0,
            "flexShrink": 0,
            "flexBasis": "auto",
        }}>Add challenges from last week</Text>
      </View>
      <ScrollView style={styles.tasks}>
        <View style={styles.task}>
          <Text>Item</Text>
        </View>
        <View style={styles.task}>
          <Text>Item</Text>
        </View>
        <View style={styles.task}>
          <Text>Item</Text>
        </View>
        <View style={styles.task}>
          <Text>Item</Text>
        </View>
        <View style={styles.task}>
          <Text>Item</Text>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Text style={{color: "#FFFFFF"}}>Next</Text>
      </View>
      <Button title="Go" onPress={() => navigation.navigate("TasksScreen")} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    position: "relative",
    width: 320,
    height: 648,
    left: 27,
    top: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#838383",
    borderStyle: "solid",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  header: {
    position: "absolute",
    width: 280,
    height: 32,
    left: 48,
    top: 78,
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
    borderBottomLeftRadius: 30
  },
  add: {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 12,
    "paddingRight": 20,
    "paddingBottom": 12,
    "paddingLeft": 20,
    "position": "absolute",
    "width": 280,
    "height": 46,
    "left": 43,
    "top": 119,
    "backgroundColor": "#2C524B",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomRightRadius": 10,
    "borderBottomLeftRadius": 10
  },
  tasks: {
    "position": "absolute",
    "width": 275,
    "height": 403,
    "left": 49,
    "top": 201
  },
  task: {
    "width": 250,
    "height": 100,
    borderBottomWidth: 1,
    borderColor: "#000000",
  }

})