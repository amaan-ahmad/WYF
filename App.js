import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';

// import {Messages} from './components/messages';
// import {custom} from './styles/myStyles';

const App: () => React$Node = () => {
  const longMsg =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget. Neque laoreet suspendisse interdum consectetur libero id faucibus. Tempus quam pellentesque nec nam aliquam sem et. Vulputate dignissim suspendisse in est ante in nibh.';
  const shortMsg =
    'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
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
              <Text style={custom.messageText}>
                {longMsg}
              </Text>
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
        <TextInput style={custom.textinput} placeholder="Say hello :)">
          {' '}
        </TextInput>
      </SafeAreaView>
    </>
  );
};

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
    width: '100%',
    fontSize: 24,
    position: 'absolute',
    bottom: 0,
    right: 0,
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
});
export default App;
