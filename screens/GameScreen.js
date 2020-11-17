import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
import GameOver from './GameOver'

const randomNumber = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const rndmNo = Math.floor(Math.random() * (max - min)) + min
  if (rndmNo === exclude) {
    return randomNumber(min, max, exclude)
  }
  return rndmNo
}
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    randomNumber(1, 100, props.userChoice)
  )
  const currentLow = useRef(1)
  const currentHigh = useRef(100)
  const [round, setRound] = useState(0)

  const { userChoice, onGameOver } = props

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(round)
    }
  }, [currentGuess, userChoice, onGameOver])

  const nextCurrentGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Wrong input', 'Thats Wrong Direction ', [
        { text: 'Sorry', style: 'cancel' },
      ])

      return
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber = randomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(nextNumber)
    setRound((currRounds) => currRounds + 1)
  }

  return (
    <View style={styles.screen}>
      <Text> Opponent currentGuess </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.button}>
        <Button
          title='Lower'
          onPress={nextCurrentGuessHandler.bind(this, 'lower')}
        />
        <Button
          title='Greater'
          onPress={nextCurrentGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
})
export default GameScreen
