import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

export const NianJiButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => props.onPress(props.children)}>
      <View style={styles.button}>
        <TitleText>{props.children}</TitleText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
});

export default NianJiButton;
