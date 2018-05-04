import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Platform, Dimensions} from 'react-native';
import I18n from '../utils/i18n';
import { Actions } from 'react-native-router-flux';

const language = [
    {lang: "English", code: "en"},
    {lang: "Svenska", code: "sw"},
    {lang: "Suomi", code: "fi"},
    {lang: "Dansk", code: "dk"},
    {lang: "Norsk", code: "nw"},
    {lang: "Afrikaans", code: "af"},
    {lang: "Pусский" , code: "ru"},
    {lang: "Eesti" , code: "ee"}

]

export default class LanguageSettings extends React.Component {

    constructor() {
        super();
        this.state = {
            languages: [],
            value: true,
        }
    }

    onSelectLanguage() {
        return(
            language.map((data, i)=> {
                return (
                   
                    <View key={i} style={styles.tabsItem}>
                        <View key={i} style={styles.tabsInnerItem}>
                            <TouchableOpacity onPress={()=>this.onSelectedLanguage(data)}>
                                <Text style={styles.generalText}>{data.lang}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                )
            })
        )
    }

    onSelectedLanguage(text) {
        this.setState({
            select: text.lang,
        })
        I18n.locale = text.code;
        Actions.refresh('language');
    }

    render() {
      return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.biggerGeneralText}>{I18n.t('langSettings.SelectLang')}</Text>
            <View>
                {(this.state.value) ? this.onSelectLanguage() : null}
            </View>
        </View>
        </ScrollView>
      )
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242628',
      justifyContent: 'center',
      
    },
    tabsItem: {
        height: Dimensions.get("window").height / 8,
        width: Dimensions.get("window").width - 12,
        padding: 4,
        borderBottomWidth : 2,
        borderBottomColor: '#2f3235',
      },
      tabsInnerItem: {
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        justifyContent: "center"
      },
    biggerGeneralText: {
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 22,
        fontWeight: "500"
    },
    generalText: {
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 18,
        fontWeight: "500"
    }
  });
  