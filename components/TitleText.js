import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleText = (props) => {
  return (
    <View>
      {props.children.split("").map((char, index) => (
        <Text key={index} style={{ ...styles.title, ...props.style }}>
          {char}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "XiaoWei",
    fontSize: 40,
  },
});

export default TitleText;
