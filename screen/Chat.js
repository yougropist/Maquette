import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, Image } from 'react-native';
import Menu from '../assets/menu.png'
import Logo from '../assets/logo.png'
import send from '../assets/send.png'
import micro from '../assets/micro.png'
export default class Chat extends React.Component {

    render(){
        return (
            <View style={styles.container}>
              <View style={{width:'100%', height:'100%'}}>
                <TouchableOpacity  onPress={()=>{this.props.history.push('/menu')}} style={{width: 70,height:70, backgroundColor:'#124a31', position: 'absolute', margin: 30, right: 0, borderRadius: 360, justifyContent:'center', alignItems:'center' }}>
                  <Image source={Menu} style={{width: 35, height: 35, margin: 20}} ></Image>
                </TouchableOpacity>
                <View style={{width: '100%', height: '85%', justifyContent:'flex-end', alignItems:'center'}}>
                  <View style={{width: '80%', margin:5,marginLeft: -50, backgroundColor:'#d6d6d6', borderRadius: 8}} >
                    <Text style={{fontSize:18, padding: 5, fontWeight:'bold', color:'#124a31'}}>Samuel</Text>
                    <Text style={{fontSize:25, padding: 7 }}>Salut, est ce que tu vas bien ?! J'aimerais que tu me développes une app mobile !</Text>
                    
                  </View>
                  <TouchableOpacity onPress={()=>{Linking.openURL(`tel:+32465831116`)}} style={{width: '80%', margin:5,marginLeft: 50 , backgroundColor:'#acff99', borderRadius: 8}} >
                    {/* <Text style={{fontSize:18, padding: 5, fontWeight:'bold', color:'#124a31'}}>Samuel</Text> */}
                    <Text style={{fontSize:25, padding: 7 }}>Salut, merci et toi comment tu vas ? Tu peux me contactez tous de suite !</Text>
                    <Text style={{fontSize:25, padding: 7, color:'blue' }}>0465831116</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://afkiryounes.com')}} style={{width: '80%', margin:5,marginLeft: 50 , backgroundColor:'#acff99', borderRadius: 8}} >
                    {/* <Text style={{fontSize:18, padding: 5, fontWeight:'bold', color:'#124a31'}}>Samuel</Text> */}
                    <Text style={{fontSize:25, padding: 7 }}>Tu peux aussi visiter mon site web pour avoir toute les informations que tu souhaites.</Text>
                    <Text style={{fontSize:25, padding: 7, color:'blue'}}>www.afkiryounes.com</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: '15%', borderTopColor: '#d6d6d6',  borderTopWidth: 3, justifyContent:'center', flexDirection:'row', alignItems:'center', backgroundColor:'#124a31'}}>
                    <View style={{width:'75%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                      <TextInput 
                        style={{borderRadius: 15, height:'50%', backgroundColor: "#fff", width:'95%', fontSize:27, color:'black', padding:10}}
                        placeholder="Entrer votre message..."
                      ></TextInput>
                    </View>
                    <View style={{width:'25%', height:'100%', justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
                      <View style={{width:'50%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                        <Image source={send} style={{width:30, height:30}}></Image>
                      </View>
                      <View style={{width:'50%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                        <Image source={micro} style={{width:30, height:30}}></Image>
                      </View>
                    </View>
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
