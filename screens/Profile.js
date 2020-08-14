import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Layout, Text, Avatar, Icon, Menu, MenuItem } from "@ui-kitten/components";

const Profile = ({ route, navigation }) => {
    const HistoryIcon = (props) => (
        <Icon {...props} name='clock-outline'/>
      );
      
      const PerfermenceIcon = (props) => (
        <Icon {...props} name='activity-outline'/>
      );

      const SettingsIcon = (props) => (
          <Icon {...props} name="settings-2-outline" />
      );

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Layout style={styles.userInfo}>
          <Avatar source={require("../assets/avatar.jpg")} size="giant" />
          <Layout style={styles.userText}>
            <Text category='h5'>Myname</Text>
            <Text category='label'>有志者事竟成</Text>
          </Layout>
          <Icon
                  style={styles.icon}
                  fill="#8F9BB3"
                  name="edit-2-outline"
                />
        </Layout>
        <Menu style={styles.menu} >
            <MenuItem title='历史记录' accessoryLeft={HistoryIcon}/>
            <MenuItem title='掌握情况' accessoryLeft={PerfermenceIcon}/>
            <MenuItem title='设置' accessoryLeft={SettingsIcon}/>
      </Menu>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10
  },
  userText: {
    marginHorizontal: 20
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Profile;
