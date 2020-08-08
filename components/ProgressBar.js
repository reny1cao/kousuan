import React, { useEffect, useState, useRef } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import Colors from "../constants/colors";

const FailedBrick = () => {
  return <Layout style={styles.failedBrick}></Layout>;
};
const SuccessBrick = () => {
  return <Layout style={styles.successBrick}></Layout>;
};
const Brick = () => {
  return <Layout style={styles.brick}></Layout>;
};

const ProgressBar = (props) => {
  return (
    <Layout style={styles.container}>
      {props.questions.map((q, i) => {
        return q.correctness == undefined ? (
          <Brick key={i} />
        ) : q.correctness ? (
          <SuccessBrick key={i} />
        ) : (
          <FailedBrick key={i} />
        );
      })}
    </Layout>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    flexDirection: "row",
  },
  failedBrick: {
    width: "10%",
    height: "100%",
    borderColor: "#ecf0f1",
    borderWidth: 0.5,
    margin: 0,
    backgroundColor: Colors.warning,
  },
  successBrick: {
    width: "10%",
    height: "100%",
    borderColor: "#ecf0f1",
    borderWidth: 0.5,
    margin: 0,
    backgroundColor: Colors.success,
  },
  brick: {
    width: "10%",
    height: "100%",
    borderColor: "#ecf0f1",
    borderWidth: 0.5,
    margin: 0,
  },
});
