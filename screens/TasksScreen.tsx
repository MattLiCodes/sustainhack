import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { TaskItem } from "../models";
import { useSelector, useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import sampleTasks from "../sampleTasks";
import { startTask, addTaskCount, getImpact } from "../redux/actions";

export default function TasksScreen({
  navigation,
}: RootTabScreenProps<"Tasks">) {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks);

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
        <Text style={styles.headerText}>This Week</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Day 1 of 7</Text>
      </View>
      <View style={styles.taskContainer}>
        {tasks
          .filter((task: any) => task.selected == true)
          .map((task: any) => {
            return (
              <View key={task.id} style={styles.taskBox}>
                <View style={styles.progressBox}>
                  <ImageBackground
                    source={require("./../assets/images/progress.png")}
                    style={progressStyle(task.id)}
                  >
                    <Text style={styles.progressText}>{task.icon}</Text>
                  </ImageBackground>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  {task.completed == false && task.totalCount == 1 ? (
                    <TouchableOpacity
                      style={styles.completeButton}
                      onPress={() => {
                        dispatch(addTaskCount(task.id, 0));
                        dispatch(getImpact());
                      }}
                    >
                      <Text style={styles.completeButtonText}>
                        Mark As Complete
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.detailedTextBox}>
                      <Text style={styles.daysText}>
                        {task.completed == false
                          ? `${task.currCount} Days Completed`
                          : `Completed`}
                      </Text>
                      <Text style={styles.carbonText}>
                        {task.currImpact} lb carbon diverted
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          })}
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
  taskContainer: {
    boxSizing: "border-box",
    position: "absolute",
    width: 322,
    left: 24,
    top: 131,
    border: "1px solid #838383",
    boxShadow: "0px 0px 50px 1px rgba(210, 157, 18, 0.1)",
    borderRadius: 30,
    overflow: "hidden",
  },
  taskBox: {
    backgroundColor: "transparent",
    flexDirection: "row",
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#838383",
    height: 107,
  },
  taskTitle: {
    paddingTop: 20,
    paddingLeft: 10,
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
    height: 107,
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
    borderLeftWidth: 1,
    borderLeftColor: "#838383",
    height: 107,
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
    marginLeft: 18,
    marginTop: 15,
    fontSize: 48,
  },
});
