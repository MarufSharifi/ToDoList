import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ToDo, InProgress, Done} from '../screens';
const Tab = createBottomTabNavigator();

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
