import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Places from './pages/Places';
import Draw from './pages/Draw';

const AppTab = createBottomTabNavigator();

export default () => {
  return(
    <NavigationContainer>
      <AppTab.Navigator
        tabBarOptions={{
          style: {
            height: 64,
          },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontSize: 13,
            marginLeft: 16,
          },
          inactiveBackgroundColor: '#fafafc',
          inactiveTintColor: '#c1bccc',
          activeTintColor: '#5855d4'
        }}
      >
        <AppTab.Screen
          name='Places'
          component={ Places }
          options={{
            tabBarLabel: 'Lugares',
            tabBarIcon: ({ color, size, focused }) => <Icon name='users' color={ focused ? color : '#ddd' } size={ size } />
          }}
        />
        <AppTab.Screen
          name='Draw'
          component={ Draw }
          options={{
            tabBarLabel: 'Sorteio',
            tabBarIcon: ({ color, size, focused }) => <Icon name='trophy' color={ focused ? color : '#ddd' } size={ size } />
          }}
        />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}