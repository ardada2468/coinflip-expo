import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Linking,
} from 'react-native'
  
import { Button, Title } from 'react-native-paper'

interface Idice {
  current?: number;
  avg?: number;
}
class About extends Component <Idice>{



 render() {
    return (
      <View style={[styles.container]}>
        <View>
            <View style={styles.aboutdev} onTouchEnd={() => Linking.openURL("https://github.com/ardada2468")} >
                <Title>About Developer</Title>
                <Text>Built by Arnav Dadarya</Text>
                <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/ardada2468")}>Github:{" ardada2468"}</Text>
            </View>
            <View style= {styles.aboutdev}  onTouchEnd={() => Linking.openURL("https://github.com/ardada2468/coinflip-expo")}>
                <Title >Code</Title>
                <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/ardada2468/coinflip-expo")}>{"Source Code"}</Text>

            </View>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 10,
    marginTop:30,
    borderRadius: 15,
  },
  link:{
    color: "#8093f1"
  },
    aboutdev:{
    margin: 10,
    padding: 20,
    backgroundColor: "#fdffb6",
    borderRadius: 15
  }

})

export default About;