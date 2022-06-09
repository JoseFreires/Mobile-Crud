import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AppList from './AppList';
import Get from './Database'

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen 
                name="Introdução" 
                component={AppList} 
                options={{
                    tabBarLabel: "Welcome"

                }}
                />
                <Screen 
                name="Lista dos Filmes" 
                component={Get}
                options={{
                    tabBarLabel: "Filmes"
                }} 
                />
                
            </Navigator>
        </NavigationContainer>
    );
}

export default AppTab;