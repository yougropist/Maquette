import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, Image } from 'react-native';
// import Menu from '../assets/menu.png'
import Logo from '../assets/logo.png'
export default class Menu extends React.Component {

    render(){
        return (
            <View style={styles.container}>
              <View style={{flexDirection:'row',width:'100%', height:'100%'}}>
                <View style={{height:'100%', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.history.push('/profil')}} style={{height:"50%", width:"100%", borderColor: '#124a31', borderWidth: 10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#000' }}>PROFIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.history.push('/chat')}} style={{height:"50%", width:"100%", backgroundColor:'#124a31', borderColor: '#fff', borderWidth: 10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#fff' }}>CHAT</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:'100%', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity  onPress={ ()=>{ Linking.openURL('https://afkiryounes.com')}} style={{height:"50%",width:"100%", backgroundColor:'#124a31', borderColor: '#fff', borderWidth: 10, justifyContent:'center', alignItems:'center'}}>
                        <Image source={Logo} ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.history.push('/')}} style={{height:"50%", width:"100%", borderColor: '#124a31', borderWidth: 10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#000' }}>CONNEXION</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          )
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
