import { StyleSheet, Button, TextInput } from "react-native";
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

  return (
    <View>
    <View style={styles.header}><Text style={{
      "fontFamily": "Days One",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 22,
      "lineHeight": 28,
      "color": "#2F2F2F"
    }}>This Week</Text></View>
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        {tasks.map((task: any) => (
          <View key={task.id}>
            <Text onPress={() => onClick(task.id)}>{task.title}</Text>
          </View>
        ))}
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  header: {
    position: "absolute",
    width: 224,
    height: 17,
    left: 22,
    top: 10,
  }
});
