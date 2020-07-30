import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";
import QuestionTypeList from "../components/QuestionTypeList";
import { Text } from "@ui-kitten/components";

import Colors from "../constants/colors";

import categories from "../constants/mocks";

const QuestionType = () => {
  //props should contain the info about what grade is choosed
  return (
    <View>
      <View style={styles.headerSection}>
        <HeaderText>一年级下册</HeaderText>
      </View>
      <SearchBar />
      <View style={styles.container}>
        <QuestionTypeList data={categories} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
