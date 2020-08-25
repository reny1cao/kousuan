import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Layout, Button, Icon, Input, CheckBox } from "@ui-kitten/components";

const Auth = ({ route, navigation }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [accountNum, setAccountNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const onSignIn = () => {
    navigation.navigate("Welcome");
  };

  const SignIn = () => (
    <Layout>
      <Layout style={styles.inputContainer}>
        <Input
          placeholder="账号"
          value={accountNum}
          onChangeText={(nextValue) => setAccountNum(nextValue)}
        />
        <Input
          value={password}
          placeholder="密码"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
      </Layout>

      <Button
        style={styles.button}
        status="primary"
        disabled={accountNum && password ? false : true}
        onPress={onSignIn}
      >
        登陆
      </Button>
      <Button
        style={styles.button}
        appearance="ghost"
        status="info"
        onPress={() => setHasAccount(false)}
      >
        没有账号？注册账号
      </Button>
    </Layout>
  );

  const SignUp = () => (
    <Layout>
      <Layout style={styles.inputContainer}>
        <Input
          placeholder="用户名"
          value={accountNum}
          onChangeText={(nextValue) => setAccountNum(nextValue)}
        />
        <Input
          placeholder="邮箱"
          value={email}
          onChangeText={(nextValue) => setEmail(nextValue)}
        />
        <Input
          value={password}
          placeholder="密码"
          caption="至少有8个字符"
          accessoryRight={renderIcon}
          captionIcon={AlertIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
      </Layout>

      <CheckBox
        checked={checked}
        onChange={(nextChecked) => setChecked(nextChecked)}
      >
        我已阅读并同意服务条款
      </CheckBox>
      <Button style={styles.button} status="primary">
        注册
      </Button>
      <Button
        style={styles.button}
        appearance="ghost"
        status="info"
        onPress={() => setHasAccount(true)}
      >
        已有账号？直接登录
      </Button>
    </Layout>
  );

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Layout style={styles.formContainer}>
          {hasAccount ? <SignIn /> : <SignUp />}
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    marginVertical: 20,
  },
});
export default Auth;
