import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Button, Title } from 'react-native-paper'
interface Icoin {
  heads?: number;
  tails?: number;
  coin?: String;
}
class coinFlip extends Component <Icoin>{
  state = {
    coin: "please filp the coin",
    heads: 0,
    tails: 0
  }

   getRand(min: number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  onPress = () => {
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
          {/* <Text>
            It is { this.state.coin } !
          </Text> */}
          <Title style={[this.getResultStyler(), styles.commonResult]}>It is { this.state.coin } !</Title>
          <Button onPress={this.onPress} style={styles.button}>
            <Text>Flip Coin</Text>
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

export default coinFlip;