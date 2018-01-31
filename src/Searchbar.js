import React from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default class Search extends React.Component {
  render(){
    return (
        <View style={styles.top}>
          <Text> kusi ja paska </Text>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  top: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d2c1',
    borderWidth: 4,
    borderColor: '#f44242'
  }
});
