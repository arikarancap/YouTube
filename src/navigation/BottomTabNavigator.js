import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, VideoUploadScreen, NotFoundScreen, TabOneScreen, TabTwoScreen, VideoScreen } from '../screens';
import { ROUTES } from '../constants';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={ROUTES.VIDEO_SCREEN} component={VideoScreen} />
        <Tab.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
        <Tab.Screen name={ROUTES.TAB_TWO} component={TabTwoScreen} />
        <Tab.Screen name={ROUTES.VIDEO_UPLOAD} component={VideoUploadScreen} />
        <Tab.Screen name={ROUTES.NOT_FOUND} component={NotFoundScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})