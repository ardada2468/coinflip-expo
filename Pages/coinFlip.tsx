import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native'
import * as Haptics from 'expo-haptics';
import { Button, Title } from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
interface Icoin {
  heads?: number;
  tails?: number;
  coin?: String;
}
class CoinFlip extends Component <Icoin>{
  state = {
    coin: "please filp the coin",
    heads: 0,
    tails: 0
  }

   getRand(min: number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

    
  // constructor() {
  // let x:Icoin = {coin: "please filp the coin",heads: 0,tails: 0};
  //  super(x)
  // }


  onPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    let rand: any = this.getRand(1,10);
    let value: String = "tails"
    if(rand <= 5){
      value = "heads"
      this.setState({
        heads: this.state.heads+1,
        coin: value
      })
    }else{
    this.setState({
      tails: this.state.tails+1,
      coin: value
    })
  }
    // console.log({rand,value})
  }


//
  getResultStyler(){
    if(this.state.coin == "tails"){
      return styles.result1;
    }else return styles.result2;
  }

 render() {
    return (
      <View style={[styles.container, this.getResultStyler()]}>
        <Text style={styles.info}># Heads: {" " + this.state.heads}</Text>
        <Text style={styles.info}># Tails:  { " " + this.state.tails}</Text>
        <View>
          <Title style={[this.getResultStyler(), styles.commonResult]}>It is { this.state.coin } !</Title>
          <Button onPress={this.onPress} style={styles.button}>
            <Text>Flip Coin</Text>
          </Button>
        </View>
      </View>
    )
  }
}


var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 10,
    borderRadius: 15,
    width: width*.9
    //
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

export default CoinFlip;