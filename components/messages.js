import {Text, View} from 'react-native';
import React from 'react';
import {custom} from '../styles/myStyles';
// const Messages: () => {
//     return(
//         <View>
//             <View style={custom.scrollViewElement}>
//                 <Text style={custom.messageText}>sweet message1</Text>
//             </View>
//             <View style={custom.scrollViewElement}>
//                 <Text style={custom.messageText}>sweet message1</Text>
//             </View>
//         </View>
//     );
// }

class Messages extends React.Component {
  render() {
    return (
      <View>
        <View style={custom.scrollViewElement}>
          <Text style={custom.messageText}>sweet message1</Text>
        </View>
        <View style={custom.scrollViewElement}>
          <Text style={custom.messageText}>sweet message1</Text>
        </View>
      </View>
    );
  }
}

export default Messages;
