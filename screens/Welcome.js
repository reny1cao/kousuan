import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import NianJiButton from "../components/NianJiButton";
import TitleText from "../components/TitleText";

const Welcome = () => {
  return (
    <View>
      <TitleText>口算</TitleText>
      <View style={styles.gradeSection}>
        <NianJiButton>一年级</NianJiButton>
        <NianJiButton>二年级</NianJiButton>
        <NianJiButton>三年级</NianJiButton>
      </View>
      <View style={styles.gradeSection}>
        <NianJiButton>四年级</NianJiButton>
        <NianJiButton>五年级</NianJiButton>
        <NianJiButton>六年级</NianJiButton>
      </View>
      <View style={styles.gradeSection}>
        <NianJiButton>上册</NianJiButton>
        <NianJiButton>下册</NianJiButton>
        <NianJiButton>确认</NianJiButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop:40
    },
    gradeSection: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        flex: 1
    }
});

export default Welcome;
