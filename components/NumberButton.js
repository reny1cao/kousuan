import React from "react";
import { Layout, Button, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const NumberButton = (props) => {
  const handlePress = () => {
    props.onPress((curr) => curr + props.children);
  };
  return (
    <Layout style={styles.buttonContainer}>
      <Button
        style={styles.button}
        appearance="outline"
        status="basic"
        onPress={handlePress}
      >
        <Text style={styles.number}>{props.children}</Text>
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  number: {
    fontSize: 20,
  },
});

export default NumberButton;
