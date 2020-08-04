import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import HeaderText from "../components/HeaderText";
import { Layout, Text, Button } from "@ui-kitten/components";

import { generateSimpleArithmetic } from "../math-problem/SimpleArithmetic";

import Colors from "../constants/colors";

const Question = ({ route }) => {
  //props should contain the info about what grade is choosed
  const { questionName } = route.params;

  const [answer, setAnswer] = useState(null);
  let generator = new generateSimpleArithmetic();

  generator.getNums(20);
  generator.getOperation();
  generator.getAnsArray();

  const handleSelectAns = (index) => {
    if (generator.answers[index] == generator.trueAns) {
      setAnswer(true);
    }
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.headerSection}>
        <HeaderText>{questionName}</HeaderText>
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
            <Button
              appearance="outline"
              status={answer && generator.trueAns == ans ? "success" : "basic"}
              key={index}
              onPress={() => handleSelectAns(index)}
            >
              <Text style={styles.answerText}>{ans}</Text>
            </Button>
          );
        })}
      </Layout>
      <Layout style={styles.nextQuestionButton}>
        {answer ? <Button>下一题</Button> : null}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    alignItems: "center",
  },
  questionContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  questionText: {
    fontSize: 40,
    fontFamily: "XiaoWei",
  },
  emptyQuestionText: {
    fontSize: 40,
    fontFamily: "XiaoWei",
    padding: 10,
  },
  questionTextContainer: {
    backgroundColor: "rgb(238, 241, 246)",
  },
  answerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  answerText: {
    fontSize: 40,
    fontFamily: "XiaoWei",
    padding: 10,
  },
  nextQuestionButton: {
    flex: 1,
    alignItems: "center",
  },
});
export default Question;
