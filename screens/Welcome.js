import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import { NianJiButton } from "../components/NianJiButton";
import TitleText from "../components/TitleText";
import { Layout } from '@ui-kitten/components';

const Welcome = ({navigation}) => {

  const handlePress = () => {
    navigation.navigate('QuestionType');
  }

  return (
      <Layout style={styles.container}>
      <TitleText>口算</TitleText>
      <Layout style={styles.gradeSection}>
        <NianJiButton onPress={handlePress}>一年级</NianJiButton>
        <NianJiButton>二年级</NianJiButton>
        <NianJiButton>三年级</NianJiButton>
      </Layout>
      <Layout style={styles.gradeSection}>
        <NianJiButton>四年级</NianJiButton>
        <NianJiButton>五年级</NianJiButton>
        <NianJiButton>六年级</NianJiButton>
      </Layout>
      <Layout style={styles.gradeSection}>
        <NianJiButton>上册</NianJiButton>
        <NianJiButton>下册</NianJiButton>
        <NianJiButton>确认</NianJiButton>
      </Layout>
      </Layout>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gradeSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
    }
});

export default Welcome;
