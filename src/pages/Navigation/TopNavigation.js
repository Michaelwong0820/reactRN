import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TopPage from '../main/TopScreen'

const TopTab = createMaterialTopTabNavigator()

class TopScreen extends React.Component {
    render() {
        return (
            <TopTab.Navigator tabBarOptions={{
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: 'blue'},
                activeTintColor: '#fff',
                inactiveTintColor: '#ccc',
                indicatorStyle: {
                    backgroundColor: "#fff",
                    height: 4
                }
            }}
            >
                <TopTab.Screen name="Top1" component={TopPage} />
                <TopTab.Screen name="Top2" component={TopPage} />
                <TopTab.Screen name="Top3" component={TopPage} />
                <TopTab.Screen name="Top4" component={TopPage} />
            </TopTab.Navigator>
        )
    }
}

export default TopScreen