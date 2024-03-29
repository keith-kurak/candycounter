import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import RootNavigator from "./app/RootNavigator";

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <RootNavigator />
      </KeyboardAvoidingView>
    );
  }
}
