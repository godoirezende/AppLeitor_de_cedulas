import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const Camera = () => {
  const navigation = useNavigation();

  const indexhtml = require("./camera.html");
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={indexhtml} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Camera;
