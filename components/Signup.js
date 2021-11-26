import React, {Component} from 'react'
import {View, StyleSheet, Text, TextInput, ScrollView} from 'react-native'
import BasicButton from "./BasicButton"
import LoginSignupButton from "./LoginSignupButton"
import {Picker} from "@react-native-picker/picker"
import ValidationComponent from "react-native-form-validator"
import {Audio} from "expo-av"
import OrDivider from './OrDivider'
import SnackBar from './SnackBar'

export default class Signup extends ValidationComponent{
  constructor (props){
    super (props);
    this.state = {name: "", email: "", ageGroup: "", password: "", confirmPassword: "", snackbarVisible: false, snackbarType: "", snackbarText: ""};
  }

  playAudio = async () => {
    try{
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(require("../assets/ding2.mp3"))
      await soundObject.playAsync()
    }
    catch(error){
      console.log("Error occurred", error)
    }
  }

  handleRegisterButtonClick = ()=>{
    this.validate({
      name: {minlength: 3, maxlength: 25, required: true},
      email: {email: true, required: true},
      ageGroup: {required: true},
      password: {required: true},
      confirmPassword: {equalPassword: this.state.password, required: true}
    });
    if(this.getErrorMessages()){
      this.displaySnackBar("Error", this.getErrorMessages())
    }
    else{
      this.hideSnackBar();
      this.playAudio();
      this.displaySnackBar("Success", "Login Clicked")
    }
  }

  displaySnackBar = (type, text)=>{
    this.setState({"snackBarType": type, "snackBarText": text});
    this.setState({"snackBarVisible": true})
  }

  hideSnackBar = ()=>{
    this.setState({"snackBarVisible": false})
  }

  handleSignInButtonClick(){
    console.log("Sign in is clicked")
  } 
  render(){
    return(
      <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput placeholder = "Enter your name" value = {this.state.name} onChangeText = {(name)=>this.setState({name})}
          style={styles.inputField}/>
          <View style={styles.divider}></View>
          <Text style={styles.label}>E-Mail Address</Text>
          <TextInput placeholder = "Enter your E-Mail" value = {this.state.email} onChangeText = {(email)=>this.setState({email})}
          style={styles.inputField}/>
          <View style={styles.divider}></View>
          <Text style={styles.label}>Age Group</Text>
          <Picker selectedValue = {this.state.ageGroup} onValueChange = {(ageGroup, itemIndex)=>this.setState({ageGroup})}
          style={styles.inputField}>
            <Picker.Item label = "" value = ""/>
            <Picker.Item label = "1-4" value = "1-4"/>
            <Picker.Item label = "5-12" value = "5-12"/>
            <Picker.Item label = "13-18" value = "13-18"/>
          </Picker >
          <View style={styles.divider}></View>
          <Text style={styles.label}>Password</Text>
          <TextInput placeholder = "Enter your password" value = {this.state.password} onChangeText = {(password)=>this.setState({password})}
          secureTextEntry style={styles.inputField}/>
          <View style={styles.divider}></View>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput placeholder = "Enter your password" value = {this.state.confirmPassword} onChangeText = {(confirmPassword)=>
          this.setState({confirmPassword})} secureTextEntry style={styles.inputField}/>
        </View>
        <BasicButton text = "Register" onPress = {this.handleRegisterButtonClick} />
        <OrDivider />
        <LoginSignupButton text = "Already have an account?" buttonText = "Sign in" onPress = {this.handleSignInButtonClick} 
        style={styles.signin}/>

        
      </ScrollView>

{
  this.state.snackBarVisible ?
      <SnackBar
          isVisible={this.state.snackBarVisible}
          text={this.state.snackBarText}
          type={this.state.snackBarType}
          onClose={this.hideSnackBar}
      />
      : null
}
</>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    paddingHorizontal: 30,
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.1,
    color: '#2E2E2E',
  },

  form: {
    marginVertical: 35,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: '#666666',
    marginBottom: 3,
  },

  inputField: {
    fontSize: 14,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
    paddingVertical: 6,
  },

  divider: {
    paddingVertical: 8,
  },

  log: {
    textAlign: 'center',
    marginVertical: 2,
    color: 'red',
  },

  signin: {
    marginVertical: 40,
  },
  snackbar: {
    backgroundColor: "red",
}
});