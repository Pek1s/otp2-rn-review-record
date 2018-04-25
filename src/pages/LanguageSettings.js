import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Platform} from 'react-native';
import I18n from '../utils/i18n';

const language = [
    {lang: "English", code: "en"},
    {lang: "Swedish", code: "sw"},
]


export default class LanguageSettings extends React.Component {

    constructor() {
        super();
        this.state = {
            languages: [],
            value: true,
            langValue:"en",
        }
        this.onLanguage=this.onLanguage.bind(this);
    }
    onSelectLanguage() {
        return(
            language.map((data, i)=>{
                return(
                    <View key={i} >
                    <TouchableOpacity onPress={()=>this.onSelectedLanguage(data)}>
                    <Text>{data.lang}</Text>
                    </TouchableOpacity>
                    </View>
                )
            })
        )
    }

    onSelectedLanguage(text) {
        this.setState({
            value: false,
            select: text.lang,
        }),
        I18n.locale = text.code;
    }
    onLanguage() {
        this.setState({
            value: true,
        })
    }

    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.biggerGeneralText}>{I18n.t('langSettings.SelectLang')}</Text>
        <View>
            <TouchableOpacity onPress={this.onLanguage}>
            <View>
                <Text style={styles.generalText}>{this.state.select}</Text>
            </View>
        </TouchableOpacity>
        <View>
            {(this.state.value) ? this.onSelectLanguage() : null}
        </View>
        </View>
        </View>
      )
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242628',
      justifyContent: 'center',
      alignItems: 'center',
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
  