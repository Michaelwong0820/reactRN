import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import TopPage from '../main/TopScreen'
import TopScreen1 from '../main/newsScreen/TopScreen1'
import TopScreen2 from '../main/newsScreen/TopScreen2'
import TopScreen3 from '../main/newsScreen/TopScreen3'
import TopScreen4 from '../main/newsScreen/TopScreen4'
import TopCommonScreen from '../main/newsScreen/TopScreen'

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
                <TopTab.Screen name="头条" component={TopScreen1} />
                <TopTab.Screen name="社会" component={TopScreen2} />
                <TopTab.Screen name="国内" component={TopScreen3} />
                <TopTab.Screen name="国际" component={TopScreen4} />
            </TopTab.Navigator>
        )
    }
}

export default TopScreen