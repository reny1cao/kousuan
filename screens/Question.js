import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button, Icon, Input } from "@ui-kitten/components";
import SimpleNumberPad from "../components/SimpleNumberPad";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "../components/ProgressBar";

const Question = ({ route }) => {
  //props should contain the info about what grade is choosed
  const [answer, setAnswer] = useState("");
  const [correctness, setCorrectness] = useState(null);
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(true);
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

  useEffect(() => {
    let interval = null;
    if (status) {
      interval = setInterval(() => setTime(time + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status, time]);

  const pauseTimer = () => {
    setStatus(false);
  };

  const startTimer = () => {
    setStatus(true);
  };

  const InfoBar = () => {
    return (
      <Layout style={styles.infoBar}>
        <ProgressBar questions={questions} />
        <Layout style={styles.statusBar}>
          <Layout style={styles.count}>
            <Text>
              {questionIndex + 1}/{questions.length}
            </Text>
          </Layout>
          <Layout style={styles.playStopButton}>
            {status ? (
              <TouchableOpacity onPress={pauseTimer}>
                <Icon
                  style={styles.icon}
                  fill="#8F9BB3"
                  name="pause-circle-outline"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={startTimer}>
                <Icon
                  style={styles.icon}
                  fill="#8F9BB3"
                  name="play-circle-outline"
                />
              </TouchableOpacity>
            )}
          </Layout>
          <Layout style={styles.timer}>
            <Text>{time}秒</Text>
          </Layout>
        </Layout>
      </Layout>
    );
  };

  const QuestionSection = () => {
    return (
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
            disabled={!status}
          />
        </Layout>
      </Layout>
    );
  };

  return (
    <Layout style={styles.container}>
      <InfoBar />
      <QuestionSection />
      <SimpleNumberPad numberOnPress={setAnswer} disabled={!status} />
      <Layout style={styles.confirmButtonContainer}>
        {correctness ? (
          <Button onPress={handleNext} disabled={!status}>
            下一题
          </Button>
        ) : (
          <Button onPress={checkAnswer} disabled={!status}>
            确定
          </Button>
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
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  count: {
    flex: 1
  },
  playStopButton: {
    flex: 1,
    alignItems: "center"
  },
  timer: {
    flex: 1,
    alignItems: "flex-end"
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
