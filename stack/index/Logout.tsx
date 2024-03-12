import * as React from 'react';
import { View, Text, ScrollView, ScrollViewProps, Alert, SafeAreaView } from 'react-native';
import { DrawerNavigationState, NavigationContainer, ParamListBase,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';



function Logout(props: any) {

    const LogOutClicked = () => {
        props.setLogin((e:boolean) => !e)
    }
    
    return (
        <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
        <View><DrawerItemList {...props} /></View>
        <DrawerItem
                label="Logout"
                onPress={() => LogOutClicked() }
                style={{marginBottom:'10%'}}
                labelStyle={{textAlign:'center',fontWeight:'bold',fontSize:20}}
        />
        
      </SafeAreaView>
    );
  }

export default Logout;