import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import NianJiButton from "../components/NianJiButton";
import TitleText from "../components/TitleText";
import { Layout, Icon, Button } from "@ui-kitten/components";

import questionTypes from "../constants/question-types";

const Welcome = ({ navigation }) => {
  const [grade, setGrade] = useState("");
  const [semester, setSemester] = useState("");
  const [selectHistory, setSelectHistory] = useState("请选择年级");

  const HistoryIcon = (props) => <Icon {...props} name="clock-outline" />;

  const findQuestinTypes = (selected) => {
    let categories = questionTypes.filter(
      (questionType) => questionType.grade == selected
    )[0].categories;
    navigation.navigate("QuestionType", {
      gradeSelected: selected,
      categories: categories,
    });
  };

  const handlePress = () => {
    const selected = grade + semester;
    setSelectHistory(selected);
    findQuestinTypes(selected);
    setGrade("");
    setSemester("");
  };

  const handleHistorySelect = () => {
    findQuestinTypes(selectHistory);
  };

  const handleGradeSelect = (selected) => {
    setGrade(selected);
  };

  const handleSemesterSelect = (selected) => {
    setSemester(selected);
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Layout style={styles.titleText}>
          <TitleText>口算</TitleText>
        </Layout>
        <Layout style={styles.gradeSection}>
          <Layout style={styles.grade}>
            <NianJiButton onPress={handleGradeSelect}>一年级</NianJiButton>
            <NianJiButton onPress={handleGradeSelect}>二年级</NianJiButton>
            <NianJiButton>三年级</NianJiButton>
          </Layout>
          <Layout style={styles.grade}>
            <NianJiButton onPress={handleGradeSelect}>四年级</NianJiButton>
            <NianJiButton onPress={handleGradeSelect}>五年级</NianJiButton>
            <NianJiButton onPress={handleGradeSelect}>六年级</NianJiButton>
          </Layout>
          <Layout style={styles.grade}>
            <NianJiButton onPress={handleSemesterSelect}>上册</NianJiButton>
            <NianJiButton onPress={handleSemesterSelect}>下册</NianJiButton>
            <NianJiButton onPress={handlePress} disabled={!(grade && semester)}>
              确认
            </NianJiButton>
          </Layout>
        </Layout>
        <Layout style={styles.selectHistory}>
          <Button
            style={styles.button}
            appearance="ghost"
            accessoryLeft={HistoryIcon}
            onPress={handleHistorySelect}
            disabled={selectHistory == "请选择年级" ? true : false}
          >
            {selectHistory}
          </Button>
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
  },
  gradeSection: {
    flex: 6,
  },
  grade: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
  selectHistory: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
