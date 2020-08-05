import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button, Icon, Input } from "@ui-kitten/components";
import SimpleNumberPad from "../components/SimpleNumberPad";

const Question = ({ route }) => {
  //props should contain the info about what grade is choosed
  const [answer, setAnswer] = useState("");
  const [correctness, setCorrectness] = useState(null);

  const { questions } = route.params;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionIndex]
  );

  const handleNext = () => {
    setQuestionIndex(questionIndex + 1);
    setCurrentQuestion(questions[questionIndex + 1]);
    setCorrectness(null);
    setAnswer("");
  };

  const checkAnswer = () => {
    const answerToNumber = Number(answer);
    if (answerToNumber == currentQuestion.trueAns) {
      setCorrectness(true);
    } else {
      setCorrectness(false);
    }
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.infoBar}>
        <Layout style={styles.prograssBar}>
          <Text>
            //////////////////////---------------------------------------------
          </Text>
        </Layout>
        <Layout style={styles.statusBar}>
          <Text>3/10</Text>
          <Icon
            style={styles.icon}
            fill="#8F9BB3"
            name="pause-circle-outline"
          />
          <Text>5秒</Text>
        </Layout>
      </Layout>
      <Layout style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.num1}</Text>
        <Text style={styles.questionText}>{currentQuestion.operation}</Text>
        <Text style={styles.questionText}>{currentQuestion.num2}</Text>
        <Text style={styles.questionText}>=</Text>
        <Layout style={styles.inputTextContainer}>
          <Input
            status={
              correctness == null ? "basic" : correctness ? "success" : "danger"
            }
            value={answer}
          />
        </Layout>
      </Layout>
      <SimpleNumberPad numberOnPress={setAnswer} />
      <Layout style={styles.confirmButtonContainer}>
        {correctness ? (
          <Button onPress={handleNext}>下一题</Button>
        ) : (
          <Button onPress={checkAnswer}>确定</Button>
        )}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoBar: {
    flex: 1,
    justifyContent: "center",
  },
  prograssBar: {
    flex: 1,
    justifyContent: "center",
  },
  statusBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  questionContainer: {
    flexDirection: "row",
    flex: 2,
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
  inputTextContainer: {
    minWidth: 90,
  },
  answerContainer: {
    flex: 1,
  },
  answerText: {
    fontSize: 40,
    fontFamily: "XiaoWei",
    padding: 10,
  },
  confirmButtonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Question;
