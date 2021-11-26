import React, { Component } from 'react'
import {StyleSheet, Text, View, Platform, Dimensions, ScrollView} from 'react-native'
import * as Haptics from 'expo-haptics';
import { Button, TextInput, Title } from 'react-native-paper'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
interface Idice {
  currentValues?: number[];
  numberOfDice: number;
  avg?: number;
}
const maxNumberDice = 5;
class UnlimitedDice extends Component <Idice>{
  
  state = {
    currentValues: [0,0],
    numberOfDice: 2,
    avg: 0,
    diceSize: 75,
    initText: "Tap on the Colored area or Button to roll dice"
  }

  x: Array<number> = [];

   getRand(min: number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  setCurrentValues(){
        const currentValues = [];
        for (let i = 0; i < this.state.numberOfDice; i++) {
            currentValues.push(this.getRand(1,6));
            }
        this.setState({currentValues: currentValues});
    }

    getSum(){
        let sum = 0;
        for(let i = 0; i < this.state.currentValues.length; i++){
            sum += this.state.currentValues[i];
        }
        return sum;
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
   this.setCurrentValues();

    this.setState(
      {
        avg: this.getSum()
          }
    )
    // console.log({rand,value})
  }

  getResultStyler1(x: number){
     let st = [styles.r1, styles.r2, styles.r3, styles.r4, styles.r5, styles.r6];
    if(x == 1){
      return st[0];
    }else if(x == 2){
      return st[1];
    }else if(x == 3){
      return st[2]; 
    }else if(x == 4){
      return st[3];
    }else if(x == 5){
      return st[4];
    }else if(x == 6){
      return  st[5];
    }else return st[this.getRand(0,5)];

  }

  
  getIcon1(x: number){;
    let color: string = "black"
    if(x == 1){
      return <MaterialCommunityIcons name="dice-1" size={this.state.diceSize} color={color} />
    }else if(x == 2){
      return <MaterialCommunityIcons name="dice-2" size={this.state.diceSize} color={color}  />
    }else if(x == 3){
      return <MaterialCommunityIcons name="dice-3" size={this.state.diceSize} color={color}  />
    }else if(x == 4){
      return <MaterialCommunityIcons name="dice-4" size={this.state.diceSize} color={color} />
    }else if(x == 5){
      return <MaterialCommunityIcons name="dice-5" size={this.state.diceSize} color={color}  />
    }else if(x == 6){
      return <MaterialCommunityIcons name="dice-6" size={this.state.diceSize} color={color}  />
  }else return <FontAwesome5 name="dice-d6" size={this.state.diceSize} color={color} />
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

onChange(value: string){
    const numberOfDice = parseInt(value);
    if(numberOfDice <= maxNumberDice){
        if(numberOfDice > 3){
            this.setState({
                diceSize: 50
            })
        }
    this.setState(
        {
            numberOfDice: numberOfDice
        })
    }else{
        this.setState(
            {
                numberOfDice: maxNumberDice
            })
    }
    // this.render();
}

//Render Method
 render() {
    return (
      <View style={[styles.container, this.getResultStyler1(this.state.avg)]} onTouchEnd={this.onPress}>
        <View>
          <View style={[styles.commonResult]}>
            {this.state.currentValues.map((value, index) => {
                return(
                    <View key={index} style={[styles.commonResult]}>
                    {this.getIcon1(value)}
                    </View>
                );
            })}
          </View>
          <Title style={styles.title}>{this.getSum()}</Title>
          <Text>{this.state.initText}</Text>
          {this.GetButton()}
          <TextInput style={styles.input} label="# of Dice:" onChangeText={text => this.onChange(text)} ></TextInput>
          </View>
      </View>
    )
  }
}

//variable to get width and height of screen
const {width, height} = Dimensions.get('window');
const withMultipliter: number = 0.75;
const textSize: number = 20;
//function to get 2 numbers using conditionals
const getHeightMulti = (): number => {
  if(Platform.OS === 'web'){
    return height * .5;
  } 
  else{     
    return height * .3;
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
  },
  title:{
    margin: 10,
    padding: 10,
    fontSize: 40,
    alignSelf: 'center'
  },
  input:{
    width: width*withMultipliter,
    alignSelf: 'center',
  }

})

export default UnlimitedDice;