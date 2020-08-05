import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

const Question = ({ route }) => {
  //props should contain the info about what grade is choosed
  const [answer, setAnswer] = useState(null);

  const { questions } = route.params;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionIndex]
  );

  const handleSelectAns = (index) => {
    if (currentQuestion.answers[index] == currentQuestion.trueAns) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const handleNext = () => {
    setQuestionIndex(questionIndex + 1);
    setCurrentQuestion(questions[questionIndex + 1]);
    setAnswer(null);
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.num1}</Text>
        <Text style={styles.questionText}>{currentQuestion.operation}</Text>
        <Text style={styles.questionText}>{currentQuestion.num2}</Text>
        <Text style={styles.questionText}>=</Text>
        <Layout style={styles.questionTextContainer}>
          <Text style={styles.emptyQuestionText}>?</Text>
        </Layout>
      </Layout>
      <Layout style={styles.answerContainer}>
        {currentQuestion.answers.map((ans, index) => {
          return (
            <Button
              appearance="outline"
              status={
                answer && currentQuestion.trueAns == ans ? "success" : "basic"
              }
              key={index}
              onPress={() => handleSelectAns(index)}
            >
              <Text style={styles.answerText}>{ans}</Text>
            </Button>
          );
        })}
      </Layout>
      <Layout style={styles.nextQuestionButton}>
        {answer ? <Button onPress={handleNext}>下一题</Button> : null}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
