import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Button} from "react-native";
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";
import QuestionTypeList from "../components/QuestionTypeList";
import { Layout } from "@ui-kitten/components";

import Colors from "../constants/colors";

import categories from "../constants/mocks";

const QuestionType = ({ route, navigation }) => {
  //props should contain the info about what grade is choosed

  const { gradeSelected } = route.params;
  return (
    <Layout style={styles.container}>
      <Layout style={styles.headerSection}>
        <HeaderText>{gradeSelected}</HeaderText>
      </Layout>
      <SearchBar />
      <Layout style={styles.container}>
        <QuestionTypeList data={categories} navigation={navigation}/>
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
  category: {
      paddingLeft: 5,
      paddingVertical: 2
  }
});
export default QuestionType;
