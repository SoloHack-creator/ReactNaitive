import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import GameScreen from './GameScreen'

const GameOver = ({ Total, newGame }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Total Rounds:{Total}</Text>
      <View style={styles.buttonContainer}>
        <Button title='NEW GAME' onPress={newGame} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GameOver
