import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native'
import * as Haptics from 'expo-haptics';
import {  Button, Title } from 'react-native-paper'

interface Icoin {
  heads?: number;
  tails?: number;
  coin?: String;
  current?: number;
  //0 = heads | 1 = tails
}
class CoinFlip extends Component <Icoin>{
  state = {
    coin: "Press to flip?",
    heads: 0,
    tails: 0,
    current: -1
  }

   getRand(min: number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  onPress = () => {
    if(!(Platform.OS === 'web')){
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }    
    let rand: any = this.getRand(1,10);
    let value: String = "tails!"
    if(rand <= 5){
      value =  "heads!"
      this.setState({
        heads: this.state.heads+1,
        coin: value,
        current: 0
      })
    }else{
    this.setState({
      tails: this.state.tails+1,
      coin: value,
      current: 1
    })
  }
  }

  
  GetButton(){
    if(Platform.OS === "web"){
      return(
        <Button onPress={this.onPress} style={styles.button}>
            <Text>Flip Coin</Text>
        </Button>
      )
    }
  }


  getResultStyler(){
    if(this.state.current === 1){
      return styles.result1;
    }else return styles.result2;
  }


 render() {
    return (
      <View style={[styles.container, this.getResultStyler()]} onTouchEnd={this.onPress}>
        <Text style={styles.info}># Heads: {" " + this.state.heads}</Text>
        <Text style={styles.info}># Tails:  { " " + this.state.tails}</Text>
        <View>
          <Title style={[this.getResultStyler(), styles.commonResult]}>{ this.state.coin }</Title>
          {this.GetButton()}
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
    borderRadius: 10,
    fontSize: 40
  }

})

export default CoinFlip;