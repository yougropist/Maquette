import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Image from '../assets/back.jpg'
export default class Register extends React.Component {

    render(){
        return (
            <View style={styles.container}>
              <ImageBackground source={Image} style={styles.image}>
                <View style={{height:'30%', width: '100%', justifyContent: 'center', alignItems: 'center', opacity: 0.8}}>
                  <View style={{width: '80%', height: 60, backgroundColor: '#124a31', justifyContent: 'center', alignItems: 'center', borderRadius: 7}}>
                    <Text style={{fontSize: 40, color: '#fff'}}>INSCRIPTION</Text>
                  </View>
                </View>
                <View style={{height:'60%', width: '100%', justifyContent: 'center', alignItems: 'center', opacity: 0.9}}>
                  <View style={{width: '80%', height: '80%', backgroundColor: '#ebebeb', justifyContent: 'center', alignItems: 'center', borderRadius: 7}}>
                    <View style={{width: "100%", height: "60%", justifyContent:'space-around', alignItems:'center'}}>
                      <TextInput style={{width:'90%', borderBottomColor: '#c4c4c4', borderBottomWidth: 3, fontSize: 20}} placeholder='Email'></TextInput>
                      <TextInput style={{width:'90%', borderBottomColor: '#c4c4c4', borderBottomWidth: 3, fontSize: 20}} placeholder='Mot de passe'></TextInput>
                      <TextInput style={{width:'90%', borderBottomColor: '#c4c4c4', borderBottomWidth: 3, fontSize: 20}} placeholder='Confirmation du mot de passe'></TextInput>
                      {/* <TextInput style={{width:'90%', borderBottomColor: '#c4c4c4', borderBottomWidth: 3, fontSize: 25}} placeholder='Password'></TextInput> */}
                    </View>          
                    <View style={{width: "100%", height: "30%"  , justifyContent:'space-around', alignItems:'center'}}>
                      <TouchableOpacity  onPress={()=>{this.props.history.push('/profil')}} style={{width: "80%", height: "40%", borderWidth: 2, borderColor: '#124a31', borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color:'#124a31', fontWeight:'bold', fontSize: 20}} >VALIDER</Text>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>{this.props.history.push('/')}} style={{width: "80%",  height: "40%", backgroundColor: '#124a31', borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold', fontSize: 20}}>RETOUR</Text>
                      </TouchableOpacity>
                    </View>
                    
                  </View>
                </View>
                <View style={{height:'10%', width: '100%', justifyContent: 'center', alignItems: 'center', opacity: 0.8}}>
                  {/* <View style={{width: '80%', height: '60%', backgroundColor: '#ebebeb', justifyContent: 'center', alignItems: 'center', borderRadius: 7}}>
                    <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold', fontStyle:'italic'}}>CREATED BY AFKIR YOUNES</Text>
                  </View> */}
                </View>
              </ImageBackground>
              
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
