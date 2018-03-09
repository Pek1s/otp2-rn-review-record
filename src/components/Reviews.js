import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { store } from '../Store.js';
import date from '../utils/formatDateAndTime';
import imgUrl from '../utils/imgUrl';


export default class AlbumView extends React.Component {
    constructor(props) {
      super(props);
      store.dispatch((dispatch) => {
        axios.get('http://review-a-record.herokuapp.com/reviews/album/' + this.props.spotifyid)
        .then((res) => {
          dispatch({type: "CHANGE_DATA", field: "reviews", payload: res.data});
        })
      })
    }

      render() {
        return (
          <View style={styles.container}>
            <ScrollView style={{marginTop: 20,  marginLeft: 3 }}>
            {
            store.getState().reviews.data && store.getState().reviews.data[0].spotifyid === this.props.spotifyid &&
            <View>
              {
                store.getState().reviews.data.map(x =>
                  <View key={x.reviewid}>
                    <Text>{x.review_text}</Text>
                    <Text>{x.username}</Text>
                  </View>
                )
              }
            </View>

          }
            </ScrollView>
          </View>
        )
      }
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#242628',
      }
    });