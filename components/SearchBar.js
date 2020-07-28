import React, { useState } from "react";
import { Icon, Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const SearchIcon = (props) => <Icon {...props} name="search-outline" />;

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      style={styles.searchBar}
      value={value}
      placeholder="搜索题型"
      accessoryRight={SearchIcon}
      onChangeText={(nextValue) => setValue(nextValue)}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: "100%",
    marginVertical: 10,
  },
});

export default SearchBar;
