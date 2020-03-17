import {StyleSheet} from 'react-native';

const custom = StyleSheet.create({
  heading: {
    fontSize: 28,
    textAlign: 'center',
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
  },
  messageText: {
    fontSize: 18,
    padding: 8,
  },
});

export default custom;
