import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import HeaderText from "../components/HeaderText";
import { Layout, Text } from "@ui-kitten/components";

import { generateSimpleArithmetic } from "../math-problem/SimpleArithmetic";

import Colors from "../constants/colors";

const Question = () => {
  //props should contain the info about what grade is choosed
  const [answer, setAnswer] = useState(0);
  let generator = new generateSimpleArithmetic();

  generator.getNums(20);
  generator.getOperation();
  generator.getAnsArray();

  console.log(generator.answers);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.headerSection}>
        <HeaderText>20以内加减法</HeaderText>
      </Layout>
      <Layout style={styles.questionContainer}>
        <Text style={styles.questionText}>{generator.num1}</Text>
        <Text style={styles.questionText}>{generator.operation}</Text>
        <Text style={styles.questionText}>{generator.num2}</Text>
        <Text style={styles.questionText}>=</Text>
        <Layout style={styles.questionTextContainer}>
          <Text style={styles.emptyQuestionText}>?</Text>
        </Layout>
      </Layout>
      <Layout style={styles.answerContainer}>
        {generator.answers.map((ans, index) => {
          return (
            <TouchableOpacity style={styles.answeTextContainer} key={index}>
              <Text style={styles.answerText}>{ans}</Text>
            </TouchableOpacity>
          );
        })}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerSection: {
    alignItems: "center",
  },
  questionContainer: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
  },
  questionText: {
    fontSize: 40,
    fontFamily: 'XiaoWei'
  },
  emptyQuestionText: {
    fontSize: 40,
    fontFamily: 'XiaoWei',
    padding: 10
  },
  questionTextContainer: {
    backgroundColor: 'rgb(238, 241, 246)'
  },
  answerContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
  },
  answerText: {
    fontSize: 40,
    fontFamily: 'XiaoWei',
    padding: 10
  },
  answeTextContainer:{
    backgroundColor: 'rgb(238, 241, 246)'
  }
});
export default Question;