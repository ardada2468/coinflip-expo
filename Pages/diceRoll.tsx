import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
} from 'react-native'
import * as Haptics from 'expo-haptics';
  
import { Button, Title } from 'react-native-paper'
import CoinFlip from './coinFlip';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
interface Idice {
  current?: number;
  avg?: number;
}
class DiceRoll extends Component <Idice>{
  
  state = {
    current: 0,
    avg: 0,
    initText: "Tap on the Colored area or Button to roll dice"
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
    if(!(Platform.OS === 'web')){
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }
    if(!(this.state.initText == "")){
      this.setState(
        {
         initText: ""
        }
      )
    }
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

  GetButton(){
    if(Platform.OS === "web"){
      return(
        <Button onPress={this.onPress} style={styles.button}>
            <Text>Roll Dice</Text>
        </Button>
      )
    }
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

  
  getIcon(){
    let size:number = 100;
    let color: string = "black"
    let x: number = this.state.current;
    if(x == 1){
      return <MaterialCommunityIcons name="dice-1" size={size} color={color} />
    }else if(x == 2){
      return <MaterialCommunityIcons name="dice-2" size={size} color={color}  />
    }else if(x == 3){
      return <MaterialCommunityIcons name="dice-3" size={size} color={color}  />
    }else if(x == 4){
      return <MaterialCommunityIcons name="dice-4" size={size} color={color} />
    }else if(x == 5){
      return <MaterialCommunityIcons name="dice-5" size={size} color={color}  />
    }else if(x == 6){
      return <MaterialCommunityIcons name="dice-6" size={size} color={color}  />
  }else return <FontAwesome5 name="dice-d6" size={size} color={color} />
}


 render() {
    return (
      <View style={[styles.container, this.getResultStyler()]} onTouchStart={this.onPress}>
        <View>
          <View style={[styles.commonResult]}>
            {this.getIcon()}
          </View>
          {this.GetButton()}
          <Text>{this.state.initText}</Text>
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
  r1: {backgroundColor: "#B7D1F8"},
  r2: {backgroundColor: "#DFD2F4"},
  r3:{backgroundColor: "#B5EAEA"},
  r4:{ backgroundColor: "#EDF6E5"},
  r5:{backgroundColor: "#FFBCBC"},
  r6:{backgroundColor: "#F38BA0"},
  commonResult:{
    padding: 10,
    margin:10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
  }

})

export default DiceRoll;