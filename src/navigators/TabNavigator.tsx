import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcon'
import CartScreen from '../screens/CartScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'


const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => (
                <BlurView 
                    overlayColor=''
                    blurAmount={15}
                    style={styles.BlurViewStyles}
                />
            ),
        }}
    >
        <Tab.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <CustomIcon 
                        name='home' 
                        size={25} 
                        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
                    />
                ),
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name='Cart' 
            component={CartScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <CustomIcon 
                        name='cart' 
                        size={25} 
                        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
                    />
                ),
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name='Favourite' 
            component={FavouriteScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <CustomIcon 
                        name='like' 
                        size={25} 
                        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
                    />
                ),
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name='History' 
            component={OrderHistoryScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <CustomIcon 
                        name='bell' 
                        size={25} 
                        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
                    />
                ),
            }}
        ></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        elevation: 0,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopColor: 'transparent',
        height: 80,
        borderTopWidth: 0,
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})

export default TabNavigator

