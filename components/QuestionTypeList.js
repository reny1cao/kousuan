import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Divider, Text } from "@ui-kitten/components";

const QuestionTypeList = (props) => {

  const handlePress = () => {
    props.navigation.navigate("QuestionStart");
  }

  const renderSubItem = (item) => (
    <View key={item.id}>
      <Divider />
      <TouchableOpacity style={styles.subItemContainer} onPress={handlePress}>
        <Text style={styles.subItem}>{item.name}</Text>
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
    backgroundColor: 'rgb(238, 241, 246)'
  },
  categoryText: {
    paddingVertical: 3
  },
  subItemContainer: {
    marginVertical: 10
  },
  subItem: {
    padding: 5,
    fontSize: 18
  }
});

export default QuestionTypeList;
