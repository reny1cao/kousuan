import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem } from '@ui-kitten/components';

const QuestionTypeList = (props) => {

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      description={"test"}
    />
  );

  return (
    <List
      style={styles.container}
      data={props.data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 200,
  },
});

export default QuestionTypeList;