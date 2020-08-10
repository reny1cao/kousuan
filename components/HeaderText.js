import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleText = (props) => {
  return (
    <View style={{...props.style }}>
        <Text style={{ ...styles.title, ...props.style }}>
          {props.children}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "XiaoWei",
    fontSize: 30,
  },
});

export default TitleText;