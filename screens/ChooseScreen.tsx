import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  startTask,
  addTaskCount,
  getImpact,
  setUser,
} from "./../redux/actions";

export default function ChooseScreen({ navigation }: any) {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 200,
          height: 46,
          backgroundColor: "#2C524B",
          position: "absolute",
          top: 200,
          left: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          dispatch(setUser(true));
          navigation.navigate("Onboarding");
        }}
      >
        <Text style={{ color: "#fff", fontFamily: "Days One" }}>New User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 200,
          height: 46,
          backgroundColor: "#2C524B",
          position: "absolute",
          top: 300,
          left: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          dispatch(startTask(0));
          dispatch(startTask(5));
          dispatch(startTask(6));
          dispatch(startTask(9));
          dispatch(startTask(1));
          dispatch(addTaskCount(0, 0));
          dispatch(addTaskCount(0, 0));
          dispatch(addTaskCount(1, 0));
          dispatch(addTaskCount(1, 0));
          dispatch(addTaskCount(1, 0));
          dispatch(addTaskCount(6, 0));
          dispatch(addTaskCount(6, 0));
          dispatch(addTaskCount(6, 0));
          dispatch(addTaskCount(9, 0));
          dispatch(getImpact());
          dispatch(setUser(false));
          navigation.navigate("Popup");
        }}
      >
        <Text style={{ color: "#fff", fontFamily: "Days One" }}>
          Returning User
        </Text>
      </TouchableOpacity>
    </View>
  );
}
