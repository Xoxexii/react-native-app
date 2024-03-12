import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../home/HomeScreen';
import Dashboard from '../dashboard/Dashboard';
import GoHome from './GoHome';
import Login from './Login';
import Logout from './Logout';



const Drawer = createDrawerNavigator();

function Index(propss:any) {
  
    
  return (
      <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <Logout {...props} setLogin={propss.setLogin} /> }>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Dashboard' component={Dashboard} options={{ headerShown:false}}/>
      </Drawer.Navigator>
    );
  }

export default Index;