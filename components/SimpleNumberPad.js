import React from "react";
import { StyleSheet } from "react-native";
import NumberButton from "./NumberButton";
import { Icon, Layout } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";

const SimpleNumberPad = (props) => {
  const handleDelete = () => {
    props.numberOnPress((curr) => {
      if (curr) {
        return curr.slice(0, -1);
      } else {
        return "";
      }
    });
  };
  return (
    <Layout style={styles.container}>
      <Layout style={styles.row}>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>1</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>2</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>3</NumberButton>
        </Layout>
      </Layout>
      <Layout style={styles.row}>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>4</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>5</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>6</NumberButton>
        </Layout>
      </Layout>
      <Layout style={styles.row}>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>7</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>8</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>9</NumberButton>
        </Layout>
      </Layout>
      <Layout style={styles.row}>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>.</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <NumberButton onPress={props.numberOnPress}>0</NumberButton>
        </Layout>
        <Layout style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleDelete}>
            <Icon style={styles.icon} fill="#8F9BB3" name="backspace" />
          </TouchableOpacity>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  icon: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SimpleNumberPad;
