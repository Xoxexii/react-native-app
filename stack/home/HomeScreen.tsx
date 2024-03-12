import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FlatList } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();
function HomeScreen({navigation}: {navigation: any}) {

  const[data,setData] = React.useState<any[]>([])

  const fetchData = async () => {
    const rawData = await fetch('http://10.0.2.2:80/user')
    const data = await rawData.json()
    setData((e) => data)
  }
    return (
      <View>
        <FlatList
        data={data}
        renderItem={({item,index}) => <>
          <Text>{item.username}</Text>
          <Text>{item.password}</Text>
          </>}
        keyExtractor={(item) => item._id}
      />
      
      <TouchableHighlight onPress={() => fetchData()}><Text>Press to fetch</Text></TouchableHighlight>
      </View>
    );
  }

export default HomeScreen;