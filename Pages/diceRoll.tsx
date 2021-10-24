import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Button, Title } from 'react-native-paper'
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
    if(this.state.current == 2){
      return styles.result1;
    }else return styles.result2;
  }

 render() {
    return (
      <View style={[styles.container, this.getResultStyler()]}>
        <View>
          <Text>avarage: {" " + this.state.avg}</Text>
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
  result1: {
    backgroundColor: "#B7D1F8",

  },
  result2: {
    backgroundColor: "#DFD2F4",
  },
  commonResult:{
    padding: 10,
    margin:10,
    borderRadius: 10
  }

})

export default DiceRoll;