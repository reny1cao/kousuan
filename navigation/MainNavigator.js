import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "../screens/Welcome.js";
import QuestionType from "../screens/QuestionType.js";
import QuestionStart from "../screens/QuestionStart.js";
import Question from "../screens/Question.js";

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <Navigator>
    <Screen name='Welcome' component={Welcome}/>
    <Screen name='QuestionType' component={QuestionType}/>
    <Screen name='QuestionStart' component={QuestionStart} />
    <Screen name='Question' component={Question}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator/>
  </NavigationContainer>
);