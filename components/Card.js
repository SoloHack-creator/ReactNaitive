import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
  // console.log('Card -> props', props)
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    // {props.children} allows you to pass between opening and closing tag
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 9,
    padding: 20,
    borderRadius: 10,
  },
})
