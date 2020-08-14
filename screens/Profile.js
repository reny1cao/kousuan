import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Layout,
  Text,
  Avatar,
  Icon,
  Menu,
  MenuItem,
} from "@ui-kitten/components";

const Profile = ({ route, navigation }) => {
  const HistoryIcon = (props) => <Icon {...props} name="clock-outline" />;

  const PerfermenceIcon = (props) => (
    <Icon {...props} name="activity-outline" />
  );
  const WrongBookIcon = (props) => <Icon {...props} name="file-text-outline" />;

  const SettingsIcon = (props) => <Icon {...props} name="settings-2-outline" />;

  const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Layout style={styles.userInfo}>
          <Avatar source={require("../assets/avatar.jpg")} size="giant" />
          <Layout style={styles.userText}>
            <Text category="h5">Myname</Text>
            <Text category="label">有志者事竟成</Text>
          </Layout>
          <Icon style={styles.icon} fill="#8F9BB3" name="edit-2-outline" />
        </Layout>
        <Menu style={styles.menu}>
          <MenuItem
            title="学习历史"
            accessoryLeft={HistoryIcon}
            accessoryRight={ForwardIcon}
          />
          <MenuItem
            title="学习报告"
            accessoryLeft={PerfermenceIcon}
            accessoryRight={ForwardIcon}
          />
          <MenuItem
            title="错题本"
            accessoryLeft={WrongBookIcon}
            accessoryRight={ForwardIcon}
          />
          <MenuItem
            title="设置"
            accessoryLeft={SettingsIcon}
            accessoryRight={ForwardIcon}
          />
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
    marginHorizontal: 15,
    marginVertical: 20,
  },
  userText: {
    marginHorizontal: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Profile;
