import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import CoinFlip from './Pages/coinFlip';
import DiceRoll from './Pages/diceRoll';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import About from './Pages/about';
import DoubleDiceRoll from './Pages/DoubleDice';
import TodoUI from './Pages/Todo';
import UnlimitedDice from './Pages/UnlimitedDie';
import SaveTodo from './Pages/SavableTodo';
class App extends Component{
  Tab = createBottomTabNavigator();
  iconSize = 24;
 render() {
    return (
      <NavigationContainer>
      <this.Tab.Navigator>
        <this.Tab.Screen name="Todo" component={SaveTodo} options={{tabBarIcon: (tabinfo) => {return(<FontAwesome5 name="clipboard-check" size={this.iconSize} color="black" />)}}}/>
        <this.Tab.Screen name="CoinFlip" component={CoinFlip} options={{tabBarIcon: (tabinfo) => {return(<FontAwesome5 name="coins" size={this.iconSize} color="black" />)}}}/>
        <this.Tab.Screen name="DiceRoll" component={DiceRoll} options={{tabBarIcon: (tabinfo) => {return(<FontAwesome5 name="dice-d6" size={this.iconSize} color="black" />)}}}/>
        <this.Tab.Screen name="Unlimted Dice" component={UnlimitedDice} options={{tabBarIcon: (tabinfo) => {return(<FontAwesome5 name="dice" size={this.iconSize} color="black" />)}}}/>
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