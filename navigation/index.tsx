/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { UnorderedListOutlined } from "@ant-design/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import TasksScreen from "../screens/TasksScreen";
import CompletedScreen from "../screens/CompletedScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SelectionScreen from "../screens/SelectionScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        tabBarSize: 10,
        tabBarActiveBackgroundColor: "#F9FFEF",
        tabBarInactiveBackgroundColor: "#F9FFEF",
        tabBarActiveTintColor: "#2C524B",
      }}
    >
      <BottomTab.Screen
        name="Tasks"
        component={TaskScreenNavigator}
        options={({ navigation }: RootTabScreenProps<"Tasks">) => ({
          headerShown: false,
          title: "Tasks",
          showLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{
          headerShown: false,
          title: "Completed",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TasksScreenNav = createNativeStackNavigator<RootStackParamList>();

function TaskScreenNavigator() {
  return (
    <TasksScreenNav.Navigator>
      <TasksScreenNav.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <TasksScreenNav.Screen
        name="Spotlight"
        component={SpotlightScreen}
        options={{ headerShown: false }}
      />
      <TasksScreenNav.Screen
        name="Selection"
        component={SelectionScreen}
        options={{ headerShown: false }}
      />
      <TasksScreenNav.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{ headerShown: false }}
      />
    </TasksScreenNav.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
