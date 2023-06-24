
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterAdvocateScreen from './src/screens/RegisterAdvocateScreen';
import RulesAndRegulationScreen from './src/screens/RulesAndRegulationScreen';
import MemoGenerationScreen from './src/screens/MemoGenerationScreen';
import ImportantLinksScreen from './src/screens/ImportantLinksScreen';
import TabRoutes from './src/screens/TabRoutes';
import LoginScreen from './src/screens/LoginScreen';
import IdCardScreen from './src/screens/IdCardScreen';

export default function App() {

  
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={IdCardScreen} />
        <Drawer.Screen name="ImportantLinks" component={ImportantLinksScreen} />
        <Drawer.Screen name="MemoGeneration" component={MemoGenerationScreen} />
        <Drawer.Screen name="RulesAndRegulation" component={RulesAndRegulationScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
