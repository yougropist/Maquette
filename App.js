import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, Image } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Login from './screen/Login'
import Chat from './screen/Chat'
import Menu from './screen/Menu'
import Profil from './screen/Profil'
import Register from './screen/Register'
export default function App() {
  return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/menu" component={Menu} />
          <Route path="/profil" component={Profil} />
          <Route path="/register" component={Register} />
        </View>
      </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
});
