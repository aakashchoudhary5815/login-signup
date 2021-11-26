import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function BasicButton({text, onPress}){
  return(
    <TouchableOpacity onPress = {onPress} style={styles.container}> 
      <Text style={styles.text}> {text} </Text>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#2b35e0",
    borderRadius: 8,
    padding: 10
  },

  text:{
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
})