import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry, Layout } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { AppNavigator } from './navigation/MainNavigator'


const fetchFonts = () => {
  return Font.loadAsync({
    XiaoWei: require("./assets/fonts/ZCOOLXiaoWei-Regular.ttf"),
  });
};


export default function App() {
  const [dataLoaded, setDataLoaded ] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>  
          <AppNavigator />
        </Layout>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
