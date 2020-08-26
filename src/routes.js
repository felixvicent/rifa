import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Places from './pages/Places';
import Draw from './pages/Draw';

const AppTab = createBottomTabNavigator();

export default () => {
  return(
    <NavigationContainer>
      <AppTab.Navigator>
        <AppTab.Screen name='Lugares' component={ Places } />
        <AppTab.Screen name='Sorteio' component={ Draw } />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}