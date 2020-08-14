import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@ui-kitten/components";
import Welcome from "../screens/Welcome.js";
import Colors from "../constants/colors";

const UserProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "book-open" : "book-open-outline";
          } else if (route.name === "Profile") {
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
      <Tab.Screen name="Home" component={Welcome} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30
  }
});