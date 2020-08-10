import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText";


const EndOfQuiz = ({ route, navigation }) => {
  
  const handleTryAgain = () => {
    navigation.navigate("QuestionStart");
  }

  const handleGOToHome = () => {
    navigation.navigate("首页");
  }
  const {time, correctRate} = route.params; 
  return (
    <Layout style={styles.container}>
        <SafeAreaView style={styles.container}>
          <HeaderText style={styles.headerText}>完成！</HeaderText>
          <Layout style={styles.info}>
            <Text style={styles.infoText}>用时 {time} 秒</Text>
            <Text style={styles.infoText}>正确率 {correctRate*100}%</Text>
          </Layout>
          <Layout style={styles.buttonContainer}>
            <Button onPress={handleTryAgain}>
              再试一次
            </Button>
            <Button onPress={handleGOToHome}>
              返回主页
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
  headerText: {
    flex: 1,
    alignItems: "center",
  },
  info: {
    flex: 1,
    alignItems: "center",
  },
  infoText: {
    fontFamily: "XiaoWei",
    fontSize: 20,
    marginVertical: 5
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: 'row',
    
  }
});
export default EndOfQuiz;