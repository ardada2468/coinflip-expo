import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import * as Haptics from 'expo-haptics';
  
import { Button, Title } from 'react-native-paper'
import CoinFlip from './coinFlip';
interface Idice {
  current?: number;
  avg?: number;
}
class DiceRoll extends Component <Idice>{
  state = {
    current: 0,
    avg: 0
  }

  x: Array<number> = [];

   getRand(min: number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  calculateAvg(){
    let total: number = 0;
    for(let i = 0; i < this.x.length; i++){
      total+=this.x[i];
    }
    return total/this.x.length;
  }

  onPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    let rand: number = this.getRand(1,7);
    this.x.push(rand);
    this.setState(
      {
        current: rand,
        avg: this.calculateAvg()
      }
    )
    // console.log({rand,value})
  }



  getResultStyler(){
    let x: number = this.state.current;
    if(x == 1){
      return styles.r1;
    }else if(x == 2){
      return styles.r2;
    }else if(x == 3){
      return styles.r3; 
    }else if(x == 4){
      return styles.r4;
    }else if(x == 5){
      return styles.r5;
    }else if(x == 6){
      return styles.r6;
    }else return styles.r6;
  }

 render() {
    return (
      <View style={[styles.container, this.getResultStyler()]}>
        <View>
          <Text>avarage: {" " + this.state.avg.toFixed(2)}</Text>
          <Title style={[this.getResultStyler(), styles.commonResult]}>It is { this.state.current } !</Title>
          <Button onPress={this.onPress} style={styles.button}>
            <Text>Roll Dice</Text>
          </Button>
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
  button: {
    // alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop:10,
  },
  info: {
    padding: 10,
    margin: 5,
  },
  r1: {
    backgroundColor: "#B7D1F8",

  },
  r2: {
    backgroundColor: "#DFD2F4",
  },
  r3:{
    backgroundColor: "#B5EAEA"
  },
  r4:{
    backgroundColor: "#EDF6E5"
  },
  r5:{
    backgroundColor: "#FFBCBC"
  },
  r6:{
    backgroundColor: "#F38BA0"
  },
  commonResult:{
    padding: 10,
    margin:10,
    borderRadius: 10
  }

})

export default DiceRoll;