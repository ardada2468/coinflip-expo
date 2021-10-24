import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import {StyleSheet,View} from 'react-native'
import CoinFlip from './Pages/coinFlip';
import DiceRoll from './Pages/diceRoll';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import About from './Pages/about';

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

  Tab = createBottomTabNavigator();
  iconSize = 24;
 render() {
    return (
      <NavigationContainer>
      <this.Tab.Navigator>
        <this.Tab.Screen name="CoinFlip" component={CoinFlip} options={{tabBarIcon: (tabinfo) => {return(<FontAwesome5 name="coins" size={this.iconSize} color="black" />)}}}/>
        <this.Tab.Screen name="DiceRoll" component={DiceRoll} options={{tabBarIcon: (tabinfo) => {return(<FontAwesome5 name="dice" size={this.iconSize} color="black" />)}}}/>
        <this.Tab.Screen name="About" component={About} options={{tabBarIcon: (tabinfo) => {return(<AntDesign name="infocirlce" size={this.iconSize} color="black" />)}}}/>

      </this.Tab.Navigator>
    </NavigationContainer>
      // <View style={styles.container}>
      //   <View>
      //     <DiceRoll></DiceRoll>
      //     <CoinFlip></CoinFlip>
      //   </View>
      // </View>
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