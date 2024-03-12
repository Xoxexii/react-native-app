import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstdashScreen from './firstdash/FirstdashScreen';
import SeconddashScreen from './seconddash/SeconddashScreen';
import GoHome from '../index/GoHome';



const Drawer = createDrawerNavigator();

function Dashboard({navigation}: {navigation: any}) {
    return (
      <Drawer.Navigator drawerContent={(props) => <GoHome {...props} /> } >
        <Drawer.Screen name='Dashboard 1' component={FirstdashScreen}/>
        <Drawer.Screen name='Dashboard 2' component={SeconddashScreen} />
      </Drawer.Navigator>
    );
  }

export default Dashboard;