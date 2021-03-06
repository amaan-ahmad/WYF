import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {db} from './src/config';
let sendMessage = item => {
  db.ref('/msg').push({
    name: item,
  });
};
const longMsg =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget. Neque laoreet suspendisse interdum consectetur libero id faucibus. Tempus quam pellentesque nec nam aliquam sem et. Vulputate dignissim suspendisse in est ante in nibh.';
const shortMsg =
  'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

class App extends React.Component {
  state = {
    msg: '',
  };

  handleChange = e => {
    this.setState({
      msg: e.nativeEvent.text,
    });
  };

  handleSubmit = () => {
    sendMessage(this.state.msg);
    this.setState({
      msg: '',
    });
  };

  render() {
    return (
      <>
        <View>
          <StatusBar backgroundColor="red" barStyle="light-content" />
        </View>
        <SafeAreaView style={custom.myContainer}>
          <View>
            <Text style={custom.heading}> Whatever You Feel</Text>
          </View>
          <ScrollView>
            {/*<Messages />*/}
            <View>
              <View style={custom.scrollViewElement}>
                <Text style={custom.messageText}>{longMsg}</Text>
              </View>
              <View style={custom.scrollViewElement}>
                <Text style={custom.messageText}>{shortMsg}</Text>
              </View>
              <View style={custom.scrollViewElement}>
                <Text style={custom.messageText}>{shortMsg}</Text>
              </View>
              <View style={custom.scrollViewElement}>
                <Text style={custom.messageText}>{longMsg}</Text>
              </View>
            </View>
          </ScrollView>
          <TextInput
            style={custom.textinput}
            placeholder="Say hello :)"
            onChange={this.handleChange}
            value={this.state.msg}
          />
          <TouchableOpacity
            style={custom.sendButton}
            onPress={this.handleSubmit}>
            <Text style={custom.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
}
const custom = StyleSheet.create({
  heading: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 16,
  },
  subHeading: {
    fontSize: 18,
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'red',
    height: 'auto',
    width: '80%',
    fontSize: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
  },
  myContainer: {
    height: '100%',
    width: '100%',
  },
  scrollViewElement: {
    backgroundColor: 'lightgray',
    margin: 6,
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 6,
    color: 'blue',
    width: '80%',
  },
  messageText: {
    fontSize: 20,
    padding: 8,
  },
  sendButton: {
    width: '20%',
    backgroundColor: 'red',
    alignSelf: 'flex-end',
  },
  sendButtonText: {
    padding: 11.5,
    color: 'white',
    fontSize: 24,
  },
});
export default App;
