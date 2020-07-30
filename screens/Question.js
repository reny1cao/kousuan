import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity} from "react-native";
import HeaderText from "../components/HeaderText";
import { Text } from "@ui-kitten/components";

import Colors from "../constants/colors";

const Question = () => {
  //props should contain the info about what grade is choosed
  return (
    <View>
      <View style={styles.headerSection}>
        <HeaderText>20以内加减法</HeaderText>
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.questionTextContainer}>
          <Text style={styles.emptyQuestionText}>?</Text>
        </View>
        <Text style={styles.questionText}>+10=15</Text>
      </View>
      <View style={styles.answerContainer}>
        <TouchableOpacity style={styles.answeTextContainer}>
          <View>
            <Text style={styles.answerText}>4</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answeTextContainer}>
          <View>
            <Text style={styles.answerText}>5</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answeTextContainer}>
          <View>
            <Text style={styles.answerText}>7</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answeTextContainer}>
          <View>
            <Text style={styles.answerText}>7</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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