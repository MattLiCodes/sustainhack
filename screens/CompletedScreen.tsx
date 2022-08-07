import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { TaskItem } from "../models";
import { useSelector, useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import sampleTasks from "../sampleTasks";
import { startTask, addTaskCount, getImpact } from "../redux/actions";

export default function CompletedScreen({
  navigation,
}: RootTabScreenProps<"Tasks">) {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks);
  const currImpact = useSelector((state: any) => state.currImpact);

  const onClick = (id: number) => {
    dispatch(addTaskCount(id, 1));
    dispatch(getImpact());
  };

  const progressStyle = (taskId: number) => {
    const progress = (tasks[taskId].currCount / tasks[taskId].totalCount) * 100;
    return {
      height: `${progress}%`,
      borderTopLeftRadius: 30,
    };
  };

  return (
    <ImageBackground
      source={require("./../assets/images/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>History</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Badges</Text>
      </View>
      <View style={styles.taskContainer}>
        <View style={styles.taskBox}>
          <View style={styles.progressBox}>
            <View style={styles.circle}>
              <ImageBackground
                source={require("./../assets/images/progress.png")}
                style={{ width: "100%", height: "100%" }}
              >
                <Text style={styles.progressText}>🌺</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.taskTitle}>Tropical Vacation</Text>
            <View style={styles.detailedTextBox}>
              <Text style={styles.daysText}>5 day streak</Text>
            </View>
          </View>
        </View>
        <View style={styles.taskBox}>
          <View style={styles.progressBox}>
            <View style={styles.circle}>
              <ImageBackground
                source={require("./../assets/images/progress.png")}
                style={{ width: "100%", height: "100%" }}
              >
                <Text style={styles.progressText}>🍀</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.taskTitle}>4 is a Lucky Number</Text>
            <View style={styles.detailedTextBox}>
              <Text style={styles.daysText}>4 week streak</Text>
            </View>
          </View>
        </View>
        <View style={styles.taskBox}>
          <View style={styles.progressBox}>
            <View style={styles.emptyCircle}>
              <Text style={styles.progressText}></Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.emptyTaskTitle}>Planting a Seed</Text>
            <View style={styles.detailedTextBox}>
              <Text style={styles.emptyText}>Start 5 tasks</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.statsHeader}>
        <Text style={styles.subHeaderText}>Stats</Text>
      </View>
      <View style={styles.statBox1}>
        <ImageBackground
          source={require("./../assets/images/statbg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text
            style={{
              marginLeft: 10,
              marginTop: 20,
              fontFamily: "Days One",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 24,
              lineHeight: 31,
              color: "#2F2F2F",
            }}
          >
            This Week
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 15,
              fontFamily: "Days One",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: 24,
              lineHeight: 31,
              color: "#2C524B",
            }}
          >
            {currImpact}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontFamily: "Days One",
              fontStyle: "normal",
              fontWeight: "400",
              color: "#2C524B",
              fontSize: 16,
              lineHeight: 22,
            }}
          >
            lbs of carbon diverted
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.statBox2}>
        <ImageBackground
          source={require("./../assets/images/statbg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text
            style={{
              marginLeft: 10,
              marginTop: 20,
              fontFamily: "Days One",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 24,
              lineHeight: 31,
              color: "#2F2F2F",
            }}
          >
            All Time
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 15,
              fontFamily: "Days One",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: 24,
              lineHeight: 31,
              color: "#2C524B",
            }}
          >
            9,753
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontFamily: "Days One",
              fontStyle: "normal",
              fontWeight: "400",
              color: "#2C524B",
              fontSize: 16,
              lineHeight: 22,
            }}
          >
            lbs of carbon diverted
          </Text>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: 224,
    height: 17,
    left: 22,
    top: 49,
    backgroundColor: "transparent",
  },
  headerText: {
    fontFamily: "Days One",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 28,
    color: "#2f2f2f",
  },
  subHeader: {
    position: "absolute",
    width: 108,
    height: 17,
    left: 24,
    top: 96,
    backgroundColor: "transparent",
  },
  subHeaderText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 27,
    color: "#2C524B",
  },
  statsHeader: {
    position: "absolute",
    width: 108,
    height: 17,
    left: 24,
    top: 484,
    backgroundColor: "transparent",
  },
  taskContainer: {
    boxSizing: "border-box",
    position: "absolute",
    width: 320,
    left: 24,
    top: 131,
    overflow: "hidden",
  },
  taskBox: {
    backgroundColor: "transparent",
    flexDirection: "row",
    flex: 2,
    marginTop: 10,
    height: 90,
    border: "1px solid #838383",
    boxShadow: "0px 0px 50px 1px rgba(210, 157, 18, 0.1)",
    borderRadius: 30,
  },
  taskTitle: {
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 20,
  },
  emptyTaskTitle: {
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 20,
    color: "#838383",
  },
  daysText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 2,
    paddingLeft: 10,
    color: "#2C524B",
  },
  emptyText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 2,
    paddingLeft: 10,
    color: "#838383",
  },
  carbonText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 20,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 10,
    color: "#838383",
  },
  progressBox: {
    width: 79,
    height: 90,
    backgroundColor: "transparent",
  },
  completeButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    width: 180,
    backgroundColor: "#2C524B",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  completeButtonText: {
    color: "white",
  },
  textBox: {
    backgroundColor: "transparent",
    width: 243,
    height: 90,
  },
  detailedTextBox: {
    backgroundColor: "transparent",
    width: 243,
    height: "100%",
  },
  progressText: {
    fontFamily: "Days One",
    fontStyle: "normal",
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 10,
    fontSize: 20,
  },
  circle: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 15,
    marginTop: 15,
    overflow: "hidden",
  },
  emptyCircle: {
    borderColor: "#838383",
    backgroundColor: "#8383883",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 15,
    marginTop: 15,
    overflow: "hidden",
  },
  statBox1: {
    boxSizing: "border-box",
    position: "absolute",
    width: 152,
    height: 188,
    left: 28,
    top: 530,
    borderWidth: 1,
    borderColor: "#838383",
    borderStyle: "solid",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: "hidden",
  },
  statBox2: {
    boxSizing: "border-box",
    position: "absolute",
    width: 152,
    height: 188,
    left: 200,
    top: 530,
    borderWidth: 1,
    borderColor: "#838383",
    borderStyle: "solid",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: "hidden",
  },
});
