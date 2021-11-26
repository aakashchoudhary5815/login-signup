import React from "react";
import {View, StyleSheet} from "react-native";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App(){
  return(
    <View style={styles.container}>
     <Signup />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "White",
    alignItems: "center",
    justifyContent: "center"
  }  
})