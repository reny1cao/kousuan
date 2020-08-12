import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Divider, Text } from "@ui-kitten/components";

const QuestionTypeList = (props) => {

  const handlePress = (questionName) => {
    props.navigation.navigate("QuestionStart", {
      questionName: questionName
    });
  }

  const renderSubItem = (item) => (
    <View key={item.id}>
      <Divider />
      <TouchableOpacity style={styles.subItemContainer} onPress={() => handlePress(item.name)}>
        <Text style={styles.subItem}>{item.name}</Text>
        <Text style={styles.hint} appearance='hint'>{item.examples}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = (item) => (
    <View key={item.id}>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryText} appearance="hint">{item.name}</Text>
      </View>
      {item.subCategories.map((item) => renderSubItem(item))}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {props.data.map(item => renderItem(item))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTextContainer: {
    backgroundColor: 'rgb(238, 241, 246)',
    paddingHorizontal: 2
  },
  categoryText: {
    paddingVertical: 3
  },
  subItemContainer: {
    marginVertical: 10
  },
  subItem: {
    padding: 5,
    fontSize: 16
  },
  hint: {
    paddingHorizontal: 5
  }
});

export default QuestionTypeList;
