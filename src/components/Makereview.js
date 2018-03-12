import React from 'react';
import axios from 'axios';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {store} from '../Store.js';

class Makereview extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        axios.post(
            'http://review-a-record.herokuapp.com/test-token',
            {token: this.props.jwttoken}
        ).then((res) => {
            axios.post('http://review-a-record.herokuapp.com/secure/reviews/save-review',{
                user_id: res.data.userid,
                artist_name: this.props.artistname,
                album_name: this.props.albumName,
                spotify_artist_id: this.props.artistid,
                spotify_album_id: this.props.spotifyid,
                review_text: this.props.writereview
              },
              {headers: {token: this.props.jwttoken}}
              )
              .then((resp) => {
                Actions.album({
                    spotifyid: this.props.spotifyid,
                    artistname: this.props.artistname,
                    artistid: this.props.artistid,
                    albumName: this.props.albumName,
                    albumImg: this.props.albumImg
                })
              })
        })
        
      }

    render(){
        return(
            <View style={styles.textinput}>
                <TextInput
                    underlineColorAndroid = "transparent"
                    placeholder = "Write your review"
                    placeholderTextColor = "white"
                    autoCapitalize = "none"
                    multiline = {true}
                    numberOfLines = {20}
                    onChangeText={(text) => store.dispatch({type: "CHANGE_DATA", field: "writereview", payload: text })}
                    value={this.props.writereview}
                    editable = {true}/>
                <TouchableOpacity style={styles.submitButton} onPress={this.onSubmit}>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { 
        writereview: state.writereview,
        jwttoken: state.jwttoken,

    }
  };
  

const styles = StyleSheet.create({
  textinput: {
 
    flex: 3,
    borderWidth: 2,
    width: 400,
    borderColor: 'white',
    
    

 },
 submitButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 15,
    height: 40,
 },
});

export default connect(mapStateToProps)(Makereview);
  