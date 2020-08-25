import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import QuestionType from "../screens/QuestionType.js";
import QuestionStart from "../screens/QuestionStart.js";
import Question from "../screens/Question.js";
import EndOfQuiz from "../screens/EndOfQuiz.js";
import Auth from "../screens/Auth.js";
import { TabNavigator } from "./TabNavigator";

const { Navigator, Screen } = createStackNavigator();

export const MainNavigator = () => (
  <Navigator>
     <Screen
      name="登陆"
      component={Auth}
      options={{ headerShown: false }}
    />
    <Screen
      name="Welcome"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Screen
      name="QuestionType"
      component={QuestionType}
      options={({ route }) => ({ title: route.params.gradeSelected })}
    />
    <Screen
      name="QuestionStart"
      component={QuestionStart}
      options={{ headerTitle: false }}
    />
    <Screen
      name="Question"
      component={Question}
      options={({ route }) => ({ title: route.params.questionName })}
    />
    <Screen
      name="EndOfQuiz"
      component={EndOfQuiz}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);
