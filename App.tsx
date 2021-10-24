import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Button, Title } from 'react-native-paper'
import CoinFlip from './Pages/coinFlip';
import coinFlip from './Pages/coinFlip';
import DiceRoll from './Pages/diceRoll';
import diceRoll from './Pages/diceRoll';
interface Icoin {
  heads?: number;
  tails?: number;
  coin?: String;
}
class App extends Component{
  // state = {
  //   coin: "please filp the coin",
  //   heads: 0,
  //   tails: 0
  // }

  //  getRandomInt(min:number, max:number) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  // }

  // onPress = () => {
  //   let rand: any = this.getRandomInt(1,10);
  //   let value: String = "tails"
  //   if(rand <= 5){
  //     value = "heads"
  //     this.setState({
  //       heads: this.state.heads+1,
  //       coin: value
  //     })
  //   }else{
  //   this.setState({
  //     tails: this.state.tails+1,
  //     coin: value
  //   })
  // }
  //   // console.log({rand,value})
  // }



  // getResultStyler(){
  //   if(this.state.coin == "tails"){
  //     return styles.result1;
  //   }else return styles.result2;
  // }

 render() {
    return (
      <View style={styles.container}>
        <View>
          <DiceRoll></DiceRoll>
          <CoinFlip></CoinFlip>
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


})

export default App;