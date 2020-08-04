import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import HeaderText from "../components/HeaderText";
import { Layout, Text } from "@ui-kitten/components";

import Colors from "../constants/colors";

const Question = () => {
  //props should contain the info about what grade is choosed

  return (
    <Layout style={styles.container}>
      <Layout style={styles.headerSection}>
        <HeaderText>20以内加减法</HeaderText>
      </Layout>
      <Layout style={styles.questionContainer}>
        <Layout style={styles.questionTextContainer}>
          <Text style={styles.emptyQuestionText}>?</Text>
        </Layout>
        <Text style={styles.questionText}>+10=15</Text>
      </Layout>
      <Layout style={styles.answerContainer}>
        <TouchableOpacity style={styles.answeTextContainer}>
          <Text style={styles.answerText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answeTextContainer}>
          <Text style={styles.answerText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answeTextContainer}>
          <Text style={styles.answerText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answeTextContainer}>
          <Text style={styles.answerText}>7</Text>
        </TouchableOpacity>
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