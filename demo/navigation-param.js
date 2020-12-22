import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    render() {
        const params = { id: 1, value: 'this is NewValue' }
        return (
            <View style={styles.container}>
                <Text>Hello, Navigation!</Text>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to Details"
                        color="#fff"
                        onPress={() => {
                            this.props.navigation.navigate('Detail', params)
                        }} />
                </View>

            </View>
        )
    }
    componentDidMount() {
        console.log('home - componentDidMount');
    }
    componentWillUnmount() {
        console.log('hmoe - componentWillUnmount');
    }
}
class DetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Detail'
    };
    render() {
        const navigate = this.props.navigation
        // console.log(navigate.getParam('id'));
        return (
            <View style={styles.container}> 】  
                <Text>Detail!</Text>
                <Text>id: {navigate.getParam('id')}</Text>
                <Text>value: {navigate.getParam('value')}</Text>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to Detail"
                        color="#fff"
                        onPress={() => {
                            navigate.push('Detail',{
                                id: Math.floor(Math.random()*100),
                                value: 'this is OldValue'
                            })
                        }} />
                </View>
            </View>)
    }
    componentDidMount() {
        console.log('Detail - componentDidMount');
    }
    componentWillUnmount() {
        console.log('Detail - componentWillUnmount');
    }
}

const SimpleApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen }
}, {
    initialRouteName: 'Home'
});

export default createAppContainer(SimpleApp)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-around"
    }
});