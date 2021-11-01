// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {StyleSheet, Text, View, Platform, Dimensions, ScrollView} from 'react-native'
import * as Haptics from 'expo-haptics';
import { Button, TextInput, Title,Checkbox  } from 'react-native-paper'
// import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
//Todo Page
interface Itodo {
    allTodos: Todo[],
    currentText: String
}

 class Todo{
    text: String;
    isDone: Boolean;

    constructor (Text:String) {
        this.text = Text;
        this.isDone= false;
    }
     getText(){
         return this.text;
     }

     getIsDone(){
        return this.isDone;
    }

    //toggle isDone
    toggleIsDone(){
        this.isDone = !this.isDone;
    }
}

class AllTodo{
    listTodo: Todo[] = [];
    public AllTodo() {}

    public getTodo(index: number):Todo{
        return this.listTodo[index]
    }

    public updateList(todos: String){
        let x = new Todo(todos);
        this.listTodo.push(x);
    }
    
    //set listTodo to new array that will be passed in
    public setList(todos: Todo[]){ 
        this.listTodo = todos;
    }
}

class TodoUI extends Component <Itodo>{
    
  todoList = new AllTodo();
 
  state = {
    allTodos: this.todoList.listTodo,
    currentText: 'Hello World'
  }

  Haptics(){
    if(!(Platform.OS === 'web')){
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }
  }

  addTodo(text: String){
    this.todoList.updateList(text);
    this.reloadState();
  }

  reloadState(){
    this.setState({AllTodos: this.todoList.listTodo})
  }

  i = 0;
  onPress = () => {
    this.addTodo(this.state.currentText);
    // console.log(this.state.allTodos);
    this.Haptics();
  }
  
  //funtion to set current text to state
  onChangeText = (text: String) => {
    this.setState({currentText: text})
  } 

  //get style bases on isDone
  getStyle(todo: Todo){
      if(todo.getIsDone()){
          return styles.todoTextDone
      }
      else{
          return styles.todoText
      }
  }  


  //function to display all todos
  renderAllTodos(){
    return this.state.allTodos.map((todo: Todo, index: number) => {
        return( 
            <View key={index}>
              <Text style={this.getStyle(todo)}>{todo.getText()}
              <View style={styles.checkbox}>
                  <Checkbox
                  status={todo.isDone ? 'checked' : 'unchecked'}
                  onPress={() => {todo.toggleIsDone(); this.reloadState(); this.Haptics()}}
                  />
                </View>
              </Text>
            </View>
        )
    })
  } 

//Render Method
 render() {
    return (
      <View style={[styles.container]} >
        <View>
          <View style={[styles.commonResult]}>
          </View>
          {/* <Title style={styles.title}>{"Todo List"}</Title> */}
          <ScrollView style={styles.scroll}>
              {this.renderAllTodos()}
          </ScrollView>
          </View>
          <View style={styles.add}>
            <TextInput style={styles.input} label="Todo Text" onChangeText={text => this.onChangeText(text)}></TextInput>
            <Button onPress={this.onPress} style={styles.button}>
                  <Text>Add Todo</Text>
            </Button>
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
  commonResult:{
    padding: 10,
    margin:10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
  },
  todoText: {
    padding: 10,
    backgroundColor: '#B5DEFF',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    margin:5,
    // textAlign: 'center',
    textAlignVertical: 'center',
    minWidth: width*withMultipliter,
    fontSize: textSize,
  },
  todoTextDone:{
    padding: 10,
    backgroundColor: "#C1FFD7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    margin:5,
    // textAlign: 'center',
    textAlignVertical: 'center',
    minWidth: width*withMultipliter,
    fontSize: textSize,
  },
  checkbox:{
    padding: 10,
    borderRadius: 10,
    // float: "right",
    //
  },
  title:{
    margin: 10,
    marginTop: 5,
    padding: 10,
    fontSize: 40,
    alignSelf: 'center'
  },
  scroll:{
    width: width,
    height: getHeightMulti(),
    padding: 10,
    borderRadius: 10,
    margin:10,
  },  add:{
    width: width,
    marginBottom: Platform.OS === 'web' ? 0 : 40,
  }, input:{
    width: width*withMultipliter,
    alignSelf: 'center',
  }

})

export default TodoUI;