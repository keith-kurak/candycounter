import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableHighlight
} from "react-native";
import { Constants } from "expo";

export default class CandyList extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  constructor() {
    super();
    this.scrollViewRef = React.createRef();
    this.state = {
      candies: [
        "Snickers",
        "Tootsie Pop",
        "Three Musketeers",
        "Starburst",
        "M&Ms",
        "Gobstoppers",
        "Candy Corn",
        "Milky Way",
        "Sour Patch Kids",
        "Skittles",
        "Hershey Bar",
        "Hershey Bar with Almonds",
        "Bubble Tape"
      ],
      newCandyName: ""
    };
  }

  _onPressAddCandy = () => {
    const newCandies = this.state.candies;
    newCandies.push(this.state.newCandyName);
    this.setState({
      candies: newCandies,
      newCandyName: ""
    });
    this._scrollToBottom();
  };

  _onChangeNewCandyName = text => {
    this.setState({ newCandyName: text });
  };

  _scrollToBottom = () => {
    setTimeout(() => {
      this.scrollViewRef.current.scrollToEnd();
    }, 500);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ref={this.scrollViewRef}
          data={this.state.candies}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Detail", { candyName: item });
              }}
            >
              <Text style={styles.candy}>{item}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Put candy name here..."
          value={this.state.newCandyName}
          onChangeText={this._onChangeNewCandyName}
          returnKeyType="done"
          onFocus={this._scrollToBottom}
          blurOnSubmit={false}
          onSubmitEditing={this._onPressAddCandy}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  candy: {
    marginHorizontal: 7,
    marginVertical: 17,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    fontSize: 18,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderTopColor: "gray",
    borderTopWidth: StyleSheet.hairlineWidth
  },
  itemSeparator: {
    marginHorizontal: 10,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "gray"
  }
});
