import React from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');


export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
          <View style={styles.artistsContainer}>
          {store.getState().artists.items && store.getState().artists.items.map( x =>
            <View key={x.id} style={styles.artistInnerItem}>
              <Image
              style={{width: '85%', height: '85%'}}
              source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
            <Text style={styles.resultText}>{x.name}</Text>
            </View>
            )}
         </View>
       );
     }
   };

   const styles = StyleSheet.create({
     artistsContainer: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       padding: 5,
       backgroundColor: '#242628',
    },
    artistInnerItem: {
      width: '50%',
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#242628',
    },
    resultText: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: 18,
      fontWeight:'500',
    }
   });
