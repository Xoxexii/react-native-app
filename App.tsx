// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from './stack/index/Index';
import Login from './stack/index/Login';

const Drawer = createDrawerNavigator();

function App() {

  const[login,setLogin] = React.useState(false)
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {login ? 
        <Drawer.Screen name="Index" options={{ headerShown:false}} >
          {(props) => <Index {...props} setLogin={setLogin} />}
        </Drawer.Screen>
        :
        <Drawer.Screen name="Login" options={{ headerShown:false}}>
          {(props) => <Login {...props} setLogin={setLogin} />}
        </Drawer.Screen>  
      }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;