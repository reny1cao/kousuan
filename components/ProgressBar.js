import React, { useEffect, useState, useRef } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

const Brick = () => {
    return (<Layout style={styles.brick}></Layout>)
}
const ProgressBar = (props) => {
  return (<Layout style={styles.container}>
      {props.questions.map((v, i) => <Brick key={i} />)}
  </Layout>);
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    flexDirection: "row"
  },
  brick: {
    width: "10%",
    height: "100%",
    borderColor: "blue",
    borderWidth: 0.5,
    margin: 0
  },
});
