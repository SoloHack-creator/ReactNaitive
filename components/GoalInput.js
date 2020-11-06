import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native'

export const GoalInput = (props) => {
  const [enteredGoal, setenteredGoal] = useState('')
  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setenteredGoal('')
  }

  return (
    <Modal visible={props.visible} animated='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='course goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          autoFocus={true}
        />
        {/* We need to pass entered text to app.js or parent component
        
      <Button title='ADD' onPress={()=>props.onAddGoal(enteredGoal)}
      arrow func  will registered  as to be executed function when function rendered 
     2)  <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
     here we r  using bind to pass reference ,,whenever it will execute
     
     */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
})
