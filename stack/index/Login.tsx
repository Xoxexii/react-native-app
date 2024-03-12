import * as React from 'react';
import { View, Text, ScrollView, ScrollViewProps, Alert, SafeAreaView, Touchable, TouchableHighlight, Button, StyleSheet, InputAccessoryView, TextInput, TouchableOpacity } from 'react-native';
import { DrawerNavigationState, NavigationContainer, ParamListBase,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';



function Login(props:any) {

    const[username,setUsername] = React.useState('')
    const[password,setPassword] = React.useState('')
    const[session,setSession] = React.useState('itim')
    
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.logo}>
                <Text>{session}</Text>
            </View>
            <View style={styles.loginform}>
                <TextInput 
                    value={username}
                    style={styles.textinput}
                    onChangeText={(i) => setUsername((e) => i)}
                    placeholder='Username'
                />
                <TextInput 
                    value={password}
                    style={styles.textinput}
                    onChangeText={(i) => setPassword((e) => i)}
                    placeholder='Password'
                />
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <TouchableHighlight style={styles.button} onPress={() => props.setLogin((e:boolean) => !e)} underlayColor='transparent'><Text style={{textAlign:'center',fontWeight:'bold'}}>LOGIN</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.button} ><Text style={{textAlign:'center',fontWeight:'bold'}}>SIGN UP</Text></TouchableHighlight>
                </View>
            </View> 
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'yellow'
    },
    logo:{
        flex:0.4
    },
    loginform:{
        flex:0.6
    },
    button:{
        
        padding:'2.5%',
        margin:'2.5%',
        borderColor:'pink',
        borderWidth:2,
        borderRadius:15
    },
    textinput:{
        borderColor:'green',
        borderBottomWidth:2 ,
        margin:20,
        paddingLeft:20
    }
  })

export default Login;