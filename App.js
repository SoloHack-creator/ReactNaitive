import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { GoalInput } from './components/GoalInput'
import GoalItem from './components/GoalItem'

const App = () => {
  const [courseGoals, setcourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  //setcourseGoals is  using function syntax,, currentgoals --> currentsnapshot of state
  const addGoalHandler = (goalTitle) => {
    setcourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
    setIsAddMode(false)
  }
  //setcourseGoals takes anonymous func as argument-->is  using function syntax
  //{} signifies more tha 1 statement
  const removeGoalHandler = (goalID) => {
    setcourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalID)
    })
  }
  //to close modal on cancel touch
  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        onCancel={cancelGoalHandler}
        visible={isAddMode}
        onAddGoal={addGoalHandler}
      />
      {/* FlatList expect structured data in form of key value */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
          //   passing id to delete method,here no need to pass id as props
          //<GoalItem  onDelete={removeGoalHandler.bind(this,itemData.item.id)} title={itemData.item.value} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginTop: 15,
  },
})

export default App
