import React from "react";
import { StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import QuestionTypeList from "../components/QuestionTypeList";
import { Layout } from "@ui-kitten/components";

// import categories from "../constants/mocks";

const QuestionType = ({ route, navigation }) => {
  //props should contain the info about what grade is choosed
  const { categories } = route.params;
  return (
    <Layout style={styles.container}>
      <SearchBar />
      <Layout style={styles.container}>
        <QuestionTypeList data={categories} navigation={navigation} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    paddingLeft: 5,
    paddingVertical: 2,
  },
});
export default QuestionType;
