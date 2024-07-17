import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitle:'Restoran Uygulaması'}}>
        <Stack.Screen name="Anasayfa" component={SearchScreen} />
        <Stack.Screen name='ResultsShow' component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({});
