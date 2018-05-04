import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { getSeveralAlbums } from '../Spotify';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import date from '../utils/formatDateAndTime';
import imgUrl from '../utils/imgUrl';
import notFoundImage from '../images/question-mark.jpg';

class ReviewBox extends React.Component {
  constructor(props) {
    super(props);

        this.state = {  
            title       : props.title,
            expanded    : true,
            animation   : new Animated.Value()
        };
    }

    toggle(){
      let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

  this.setState({
      expanded : ! this.state.expanded
  });

  this.state.animation.setValue(initialValue);
  Animated.spring(   
      this.state.animation,
      {
          toValue: finalValue
      }
  ).start(); 
}

    _setMaxHeight(event){
      this.setState({
          maxHeight : event.nativeEvent.layout.height
      });
  }
  
  _setMinHeight(){
      this.setState({
          minHeight : Dimensions.get("window").height/4
      });
  }

  render() {

    

    const toAlbumPage = () => {
      Actions.album({ 
          spotifyid: this.props.review.spotify_album_id,
          albumName: album[0].artists[0].name,
          albumImg: imgUrl(album[0].images)
      })
    }
    const currentAlbum = (spotifyid) => {
      if (this.props.albums) {
        return this.props.albums.filter(x => x.id === spotifyid);
      }
      return null;
    }
    const album = currentAlbum(this.props.review.spotify_album_id);
    return (  
      
      <Animated.View  style={[styles.reviewContainer,{height: this.state.animation}]} onLayout={this._setMinHeight.bind(this)}>
      
        { this.props.albums && album[0] && (
            <View style={styles.albumInfo}>
            <TouchableOpacity
              key={this.props.review.spotify_album_id}
              onPress={ toAlbumPage }
            >
              <Image source={ album[0].images.length > 0 ? {uri: album[0].images[0].url} : notFoundImage  } style={styles.images} />
              <Text numberOfLines={1} style={styles.artistInfoText}>{ album[0].artists[0].name }</Text>
              <Text numberOfLines={1} style={styles.artistInfoText}>{ album[0].name }</Text>
            </TouchableOpacity>
            </View> 
          
        ) }
        
        <View style={styles.reviewerWrapper}>
          <View style={styles.reviewerInfoContainer}>
            <Text numberOfLines={1} style={styles.userNameText}>{ this.props.review.username}</Text>
            <Text numberOfLines={1} style={styles.reviewDataText}>{ date(this.props.review.date_time)}</Text>
          </View>
          <TouchableOpacity style={styles.userReviewContainer} onLayout={this._setMaxHeight.bind(this)} onPress={this.toggle.bind(this)}>      
          <View style={styles.tabsInnerItem} >
              <Text style={styles.reviewText}>{ this.props.review.review_text }</Text>
              </View>
          </TouchableOpacity>
        </View>
      </Animated.View > 
        );
  }
};

function mapStateToProps(state) {
    return { albums: state.recentreviews.albums  }
  };

export default connect(mapStateToProps)(ReviewBox);

const styles = StyleSheet.create({
  container   : {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden'
},
  reviewContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 10,
    overflow:"hidden",
    backgroundColor: '#222222',
    maxHeight: Dimensions.get("window").height/2,
    width: Dimensions.get("window").width - 12,
    paddingBottom: 20,
    borderBottomWidth : 2,
    borderBottomColor: '#2f3235',
  },
  albumInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    alignItems: 'center',
    backgroundColor: '#35912e',
    borderRadius: 4,
  },
  images: {
    borderRadius: 100,
    marginTop: 5,
    borderColor: '#ffffff',
    borderWidth: 2,
    alignItems: 'center',
    height: Dimensions.get('window').height/10,
    width: Dimensions.get('window').width/6,
  },
  artistInfoText: {
    color: "rgba(255, 255, 255, 1.0)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: 'center',
    maxWidth: Dimensions.get('window').width/6,
  },
  reviewerWrapper: {
    flex: 4,
    flexDirection: 'column'
  },
  reviewerInfoContainer: {
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 5,
    justifyContent: 'flex-start',
    borderBottomWidth : 2,
    borderBottomColor: '#2f3235',
  },
  userReviewContainer: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 5,
  },
  tabsInnerItem: {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    
  },
  reviewText: {
    flex: 2,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
  },
  userNameText: {
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'flex-start',
    textAlignVertical: 'bottom',
    textAlign: 'left',
    marginRight: 15,
    fontSize: 18,
  },
  reviewDataText: {
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.5)',
    textAlignVertical: 'bottom',
    textAlign: 'left',
    fontSize: 12,
  },
});
