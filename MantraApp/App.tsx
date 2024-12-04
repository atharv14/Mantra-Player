import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Screens
import RecordScreen from './src/screens/RecordScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import PlaybackScreen from './src/screens/PlaybackScreen';

const Tab = createBottomTabNavigator();

const theme = {
  light: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#3B82F6', // Blue color from your design
    record: '#F87171',  // Red color for record button
    upload: '#4ADE80',  // Green color for upload button
  },
  dark: {
    background: '#1F2937',
    text: '#FFFFFF',
    primary: '#60A5FA',
    record: '#EF4444',
    upload: '#34D399',
  },
};

export default function App() {
  const colorScheme = useColorScheme();
  const activeTheme = theme[colorScheme ?? 'light'];

  return (
    <NavigationContainer>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Record') {
              iconName = focused ? 'mic' : 'mic-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'library' : 'library-outline';
            } else if (route.name === 'Playback') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: activeTheme.primary,
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: activeTheme.primary,
          },
          headerTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: activeTheme.background,
          },
        })}
      >
        <Tab.Screen name="Record" component={RecordScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen 
          name="Playback" 
          component={PlaybackScreen}
          options={{ title: 'Now Playing' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}