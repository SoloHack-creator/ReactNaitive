import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import GameOver from './screens/GameOver'
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'

const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [rounds, setRounds] = useState(0)

  const newGameHandler = () => {
    setRounds(0)
    setUserNumber(null)
  }

  const gameOverHandler = (rounds) => {
    setRounds(rounds)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setRounds(0)
  }
  // passing  startGameHandler reference down to child component so that it can be triggered by child component
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  } else if (rounds > 0) {
    content = <GameOver Total={rounds} newGame={newGameHandler} />
  }

  console.log('App -> content', content)
  return (
    <View style={styles.screen}>
      <Header title='Guess a Numbers' />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default App
