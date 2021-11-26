import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import BasicButton from "./BasicButton";
import LoginSignupButton from "./LoginSignupButton"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleLoginButtonClicked() {
    console.log("Login is clicked")
  }
  function handleSignupButtonClicked() {
    console.log("Signup is clicked")
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Login </Text>
      <View style={styles.form}>
        <Text style={styles.label}> E-Mail Address </Text>
        <TextInput
          placeholder="Enter your E-Mail Address"
          value={email}
          onChangeText={(val) => setEmail(val)}
          keyboardType="email-address"
          style={styles.inputField}
        />
        <View style={styles.divider}></View>
        <Text style={styles.label}> Password </Text>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={(val) => setPassword(val)}
          secureTextEntry
          style={styles.inputField}
        />
      </View>
      <BasicButton text = "Login" onPress = {handleLoginButtonClicked}/>
      <LoginSignupButton customStyle = {styles.signup} text = "Don't have an account?" buttonText = "Sign Up"
      onPress = {handleSignupButtonClicked} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    marginTop: 60,
    paddingHorizontal: 30,
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.1,
    color: '#2e2e2e',
  },

  form: {
    marginVertical: 35,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: '#666',
    marginBottom: 3,
  },

  inputField: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    paddingVertical: 6,
  },

  divider: {
    paddingVertical: 12,
  },

  signup: {
    marginTop: 40
  }
});
