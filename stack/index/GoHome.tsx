import * as React from 'react';
import { View, Text, ScrollView, ScrollViewProps, Alert, SafeAreaView } from 'react-native';
import { DrawerNavigationState, NavigationContainer, ParamListBase,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';



function GoHome(props: any) {

    const GoHomeClicked = () => {
        props.navigation.dispatch(DrawerActions.closeDrawer());
        props.navigation.navigate('Dashboard 1')
        props.navigation.navigate('Home')
    }
    
    return (
        <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
        <View><DrawerItemList {...props} /></View>
        <DrawerItem
                label="Back to Home"
                onPress={() => GoHomeClicked() }
                style={{marginBottom:'10%'}}
                labelStyle={{textAlign:'center',fontWeight:'bold',fontSize:20}}
        />
        
      </SafeAreaView>
    );
  }

export default GoHome;