import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


const EndOfQuiz = ({ route, navigation }) => {
  //props should contain the info about what grade is choosed
  const {time, correctRate} = route.params; 
  return (
    <Layout style={styles.container}>
        <SafeAreaView>
            <Text>用时 {time} 正确率 {correctRate}</Text>
        </SafeAreaView>
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
export default EndOfQuiz;