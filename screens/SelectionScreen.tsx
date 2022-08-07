import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { startTask, deselectTask } from "./../redux/actions";

export default function SelectionScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const lastWeek = useSelector((state: any) => state.lastWeek);
  const tasks = useSelector((state: any) => state.tasks);
  return (
    <ImageBackground
      source={require("./../assets/images/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Customize Your Week </Text>
      </View>
      <TouchableOpacity style={styles.add}>
        <Text
          style={styles.addText}
          onPress={() => {
            lastWeek.forEach((i: any) => {
              dispatch(startTask(i));
            });
          }}
        >
          Add challenges from last week
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.tasks}>
        <View>
          {tasks.map((task: any) => {
            return (
              <View key={task.id} style={styles.task}>
                {task.selected ? (
                  <TouchableOpacity
                    style={styles.checkedBox}
                    onPress={() => dispatch(deselectTask(task.id))}
                  />
                ) : (
                  <TouchableOpacity
                    style={styles.uncheckedBox}
                    onPress={() => dispatch(startTask(task.id))}
                  />
                )}
                <Text style={styles.taskText}>{task.title}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Text style={{ color: "#FFFFFF" }}>Next</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{ color: "#FFFFFF" }}
          onPress={() => navigation.navigate("TasksScreen")}
        >
          Ready to start!
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
    borderBottomLeftRadius: 30,
  },
  header: {
    position: "absolute",
    width: 280,
    height: 32,
    left: 48,
    top: 78,
  },
  headerText: {
    fontFamily: "DaysOne-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 28,
    color: "#000000",
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
  add: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 12,
    paddingLeft: 20,
    position: "absolute",
    width: 280,
    height: 46,
    left: 43,
    top: 119,
    backgroundColor: "#2C524B",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  addText: {
    width: 240,
    height: 22,
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    color: "#FFFFFF",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  },
  tasks: {
    position: "absolute",
    width: 275,
    height: 403,
    left: 49,
    top: 201,
  },
  task: {
    marginBottom: 5,
    width: 250,
    height: 100,
    borderBottomWidth: 1,
    borderColor: "#000000",
    justifyContent: "center",
    flex: 1,
  },
  taskText: {
    marginVertical: 15,
    marginLeft: 50,
    position: "absolute",
    top: 0,
    color: "#2f2f2f",
  },
  uncheckedBox: {
    marginVertical: 10,
    marginLeft: 10,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  checkedBox: {
    marginVertical: 10,
    marginLeft: 10,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#2C524B",
  },
});
