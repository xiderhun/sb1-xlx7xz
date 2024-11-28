import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@ui-kitten/components';

import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Recipes':
            iconName = 'book-open';
            break;
          case 'Shopping List':
            iconName = 'shopping-cart';
            break;
          case 'Profile':
            iconName = 'person';
            break;
          default:
            iconName = 'square';
        }

        return <Icon name={iconName} width={size} height={size} fill={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Recipes" component={RecipesScreen} />
    <Tab.Screen name="Shopping List" component={ShoppingListScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Onboarding">
    <Stack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MainApp"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;