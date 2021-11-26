import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function LoginSignupButton({customStyle, text, buttonText, onPress}){
  return(
    <View style={[styles.container, customStyle]}>
      <Text style={styles.text}> {text} </Text>
      <TouchableOpacity>
        <Text style={styles.buttonText}> {buttonText} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    fontSize: 16,
    lineHeight: 20,
    flexDirection: "row",
    alignItems: "center"
  },

  text:{
    fontSize: 16,
    lineHeight: 20
  },

  buttonText:{
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 20,
    color: "#2b35e0",
    marginLeft: 2
  }
})