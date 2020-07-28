import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";

const QuestionType = () => {
    //props should contain the info about what grade is choosed
    return (
        <View style={styles.container}>
            <HeaderText>一年级下册</HeaderText>
            <SearchBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
})
export default QuestionType;