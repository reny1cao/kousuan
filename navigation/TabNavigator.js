import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@ui-kitten/components";
import Welcome from "../screens/Welcome.js";
import Profile from "../screens/Profile";
import Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "首页") {
            iconName = focused ? "book-open" : "book-open-outline";
          } else if (route.name === "用户") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Icon name={iconName} style={styles.icon} fill={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.info,
        inactiveTintColor: Colors.primary,
      }}
    >
      <Tab.Screen name="首页" component={Welcome} />
      <Tab.Screen name="用户" component={Profile} />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30
  }
});