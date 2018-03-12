import React from 'react';
import axios from 'axios';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
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
            console.log(res.data.userid, this.props.writereview,this.props.albumname,);
            axios.post('http://review-a-record.herokuapp.com/secure/reviews/save-review',{
                user_id: res.data.userid,
                artist_name: this.props.artistname,
                album_name: this.props.albumname,
                spotify_artist_id: this.props.spotifyid,
                spotify_album_id: this.props.albumid,
                review_text: this.props.writereview
              },
              {headers: {token: this.props.jwttoken}}
              )
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    

 },
 submitButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 15,
    height: 40,
 },
});

export default connect(mapStateToProps)(Makereview);
  