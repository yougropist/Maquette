import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, Image } from 'react-native';
import Menu from '../assets/menu.png'
export default class Profil extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <View style={{height:'20%', width: '100%', justifyContent: 'center', alignItems: 'center', opacity: 0.8, flexDirection:'row',backgroundColor: '#124a31', borderBottomWidth: 3, borderColor: '#c4c4c4'}}>
                  <View style={{width: '70%', height: "100%",  justifyContent: 'flex-start',flexDirection:'row', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 40, color: '#fff', margin: 10}}>PROFIL</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{this.props.history.push('/menu')}}  style={{width: '30%', height: "100%", justifyContent:'flex-end', alignItems:'flex-end'}}>
                    <Image source={Menu} style={{width: 35, height: 35, margin: 20}} ></Image>
                  </TouchableOpacity>
                </View>
                <View style={{height:'80%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'#c4c4c4'}}>
                  <View style={{width: '100%', height: 80 ,  borderWidth: 3, borderColor: '#c4c4c4', justifyContent:'center', margin: 3 , backgroundColor:'#fff'}}>
                    <Text style={{fontSize: 30, color: '#124a31', marginLeft: 10, fontWeight: 'bold'}}>Nom</Text>
                    <Text style={{fontSize: 20, color: '#000', marginLeft: 10}}>AFKIR</Text>
                  </View>
                  <View style={{width: '100%', height: 80 ,  borderWidth: 3, borderColor: '#c4c4c4', justifyContent:'center', margin: 3, backgroundColor:'#fff' }}>
                    <Text style={{fontSize: 30, color: '#124a31', marginLeft: 10, fontWeight: 'bold'}}>Prenom</Text>
                    <Text style={{fontSize: 20, color: '#000', marginLeft: 10}}>YOUNES</Text>
                  </View>
                  <View style={{width: '100%', height: 80 ,  borderWidth: 3, borderColor: '#c4c4c4', justifyContent:'center', margin: 3, backgroundColor:'#fff' }}>
                    <Text style={{fontSize: 30, color: '#124a31', marginLeft: 10, fontWeight: 'bold'}}>Email</Text>
                    <Text style={{fontSize: 20, color: '#000', marginLeft: 10}}>Afkir.younes@hotmail.com</Text>
                  </View>
                  <View style={{width: '100%', height: 80 ,  borderWidth: 3, borderColor: '#c4c4c4', justifyContent:'center', margin: 3 , backgroundColor:'#fff'}}>
                    <Text style={{fontSize: 30, color: '#124a31', marginLeft: 10, fontWeight: 'bold'}}>Gsm</Text>
                    <Text style={{fontSize: 20, color: '#000', marginLeft: 10}}>+32 465 83 11 16</Text>
                  </View>
                  <View style={{width: '100%', height: 80 ,  borderWidth: 3, borderColor: '#c4c4c4', justifyContent:'center', margin: 3 , backgroundColor:'#fff'}}>
                    <Text style={{fontSize: 30, color: '#124a31', marginLeft: 10, fontWeight: 'bold'}}>Siege</Text>
                    <Text style={{fontSize: 20, color: '#000', marginLeft: 10}}>Rue rubens 114, 1030 Bruxelles</Text>
                  </View>
                  <View style={{width: '100%', height: 80 ,  borderWidth: 3, borderColor: '#c4c4c4', justifyContent:'center', margin: 3 , backgroundColor:'#fff'}}>
                    <Text style={{fontSize: 30, color: '#124a31', marginLeft: 10, fontWeight: 'bold'}}>TVA</Text>
                    <Text style={{fontSize: 20, color: '#000', marginLeft: 10}}>0742.627.446</Text>
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
