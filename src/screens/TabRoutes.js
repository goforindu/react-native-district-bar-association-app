import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterAdvocateScreen from './RegisterAdvocateScreen';
import AdvocateDirectoryScreen from './AdvocateDirectoryScreen';

function TabRoutes(props) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
      <Tab.Screen name="RegisterAdvocate" component={RegisterAdvocateScreen} />
      <Tab.Screen name="AdvocateDirectory" component={AdvocateDirectoryScreen} />
      </Tab.Navigator>
    );
}

export default TabRoutes;