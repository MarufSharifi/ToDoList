import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ToDo, InProgress, Done} from '../screens';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="todo" component={ToDo} />
        <Tab.Screen name="inProgress" component={InProgress} />
        <Tab.Screen name="done" component={Done} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
