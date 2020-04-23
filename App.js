import * as React from 'react'
import { View } from 'react-native'
import Dashboard from './components/Dashboard'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckDetails from './components/DeckDetails'
import Quiz from './components/Quiz'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/decks'
import { AppStatusBar } from './components/HelperComponents/AppStatusBar'
import { blue } from './utils/colors'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FloatingAction from './components/HelperComponents/HomeActionButton'

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialTopTabNavigator()
const Stack = createStackNavigator();

const tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={Dashboard} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={blue}></AppStatusBar>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="Flash Card App" component={tabs} />
            <Stack.Screen name="DeckDetails" component={DeckDetails} options={{
              title: 'Deck Details',
            }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }} />
            <Stack.Screen name="AddCard" component={AddCard} options={{ title: 'Add New Card' }} />
          </Stack.Navigator>
        </NavigationContainer>
        <FloatingAction />
      </View>
    </Provider>
  );
}

