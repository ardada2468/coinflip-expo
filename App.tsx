import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import CoinFlip from './Pages/coinFlip';
import DiceRoll from './Pages/diceRoll';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import About from './Pages/about';
class App extends Component{
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
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;