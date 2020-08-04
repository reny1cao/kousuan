import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import HeaderText from "../components/HeaderText";
import { Layout, Text, Button } from "@ui-kitten/components";

import { generateSimpleArithmetic } from "../math-problem/SimpleArithmetic";

const QuestionStart = ({ route, navigation }) => {
  const { questionName } = route.params;

  const [answer, setAnswer] = useState(0);
  let generator = new generateSimpleArithmetic();

  generator.getNums(20);
  generator.getOperation();
  generator.getAnsArray();

  const handlePress = () => {
    navigation.navigate("Question", {
      questionName: questionName,
    });
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.headerTextContainer}>
        <HeaderText>{questionName}</HeaderText>
      </Layout>
      <Layout style={styles.questionTextContainer}>
        <Text>一共10题</Text>
      </Layout>
      <Layout style={styles.startButtonContainer}>
        <Button onPress={handlePress}>开始</Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  questionTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  startButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default QuestionStart;
