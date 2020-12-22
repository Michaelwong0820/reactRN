import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello, Navigation!</Text>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to Details"
                        color="#fff"
                        onPress={() => {
                            this.props.navigation.navigate({ routeName: 'Detail' })
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
        return (
            <View style={styles.container}>
                <Text>Detail!</Text>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to Home"
                        color="#fff"
                        onPress={() => {
                            navigate.navigate('Home')
                        }} />
                </View>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to push"
                        color="#fff"
                        onPress={() => {
                            navigate.push('Detail')
                        }} />
                </View>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to back"
                        color="#fff"
                        onPress={() => {
                            navigate.goBack()
                        }} />
                </View>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to popToTop"
                        color="#fff"
                        onPress={() => {
                            navigate.popToTop()
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