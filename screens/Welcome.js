import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, SafeAreaView } from "react-native";
import NianJiButton from "../components/NianJiButton";
import TitleText from "../components/TitleText";
import { Layout } from '@ui-kitten/components';

import questionTypes from '../constants/question-types';

const Welcome = ({navigation}) => {
  const [grade, setGrade] = useState('');

  const handlePress = () => {
    let categories = questionTypes.filter(questionType => questionType.grade == grade)[0].categories;
    let selected = JSON.parse(JSON.stringify(grade));
    setGrade("");
    navigation.navigate('QuestionType', {gradeSelected: selected, categories: categories});
  }

  const handleGradeSelect = (selected) => {
    // console.log(selected)
    setGrade(currentGrade => currentGrade + selected);
    console.log(grade)
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
      <TitleText>口算</TitleText>
      <Layout style={styles.gradeSection}>
        <NianJiButton onPress={handleGradeSelect}>一年级</NianJiButton>
        <NianJiButton onPress={handleGradeSelect}>二年级</NianJiButton>
        <NianJiButton>三年级</NianJiButton>
      </Layout>
      <Layout style={styles.gradeSection}>
        <NianJiButton onPress={handleGradeSelect}>四年级</NianJiButton>
        <NianJiButton onPress={handleGradeSelect}>五年级</NianJiButton>
        <NianJiButton onPress={handleGradeSelect}>六年级</NianJiButton>
      </Layout>
      <Layout style={styles.gradeSection}>
        <NianJiButton onPress={handleGradeSelect}>上册</NianJiButton>
        <NianJiButton onPress={handleGradeSelect}>下册</NianJiButton>
        <NianJiButton onPress={handlePress}>确认</NianJiButton>
      </Layout>
      </SafeAreaView>
    </Layout>
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gradeSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
    }
});

export default Welcome;
