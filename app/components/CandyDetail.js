import React from "react";
import { View, Text } from "react-native";

export default class CandyDetail extends React.Component {
  static navigationOptions = {
    title: "Detail"
  };

  render() {
    return (
      <View>
        <Text>{`Info about ${this.props.navigation.getParam(
          "candyName"
        )} here!`}</Text>
      </View>
    );
  }
}
