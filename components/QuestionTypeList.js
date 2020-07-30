import React from "react";
import { StyleSheet, FlatList, View, Button, TouchableOpacity } from "react-native";
import { Divider, Text } from "@ui-kitten/components";

const QuestionTypeList = (props) => {
  const renderSubItem = (item) => (
    <View key={item.id}>
      <Divider />
      <TouchableOpacity style={styles.subItemContainer}>
        <Text style={styles.subItem}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryText} appearance="hint">{item.name}</Text>
      </View>
      {item.subCategories.map((item) => renderSubItem(item))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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