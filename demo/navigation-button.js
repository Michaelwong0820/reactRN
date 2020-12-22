import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     headerTitle: 'HomeScreen',
    //     headerStyle: {
    //         backgroundColor:"steelblue"
    //     },
    //     headerTitleStyle : {
    //         color:'#fff',
    //         fontSize: 18,
    //         fontWeight: 'bold'
    //     }

    // };
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => <LogoTitle />,
            headerRight: () => <Button
                title='click'
                color='#fff'
                onPress={
                    // console.log(1);
                    navigation.getParam('createCount')
                }
            />
        }

    }
    _createCount = () => {
        this.setState({
            count: ++this.state.count
        })
    }
    render() {
        const params = { id: 1, value: 'this is NewValue' }
        return (
            <View style={styles.container}>
                <Text>Hello, Navigation!</Text>
                <Text>count:{this.state.count}</Text>
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
        this.props.navigation.setParams({ createCount: this._createCount })
    }
    componentWillUnmount() {
        console.log('hmoe - componentWillUnmount');
    }

}
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603967495082&di=7380af7856300c5cfd6617c7e136845c&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F03%2F26%2Fcafc6ea253bc2ebc78918dc44c8671c7.jpg' }}
                style={{ width: 30, height: 30 }}
            />
        )
    }
}
class DetailScreen extends React.Component {
    static navigationOptions = {
        // header:null,
        headerBackTitle: '返回',
        headerTitle: 'DetailScreen',
        headerStyle: {
            backgroundColor: "pink"
        },
        headerTitleStyle: {
            color: 'skyblue',
            fontSize: 16
        }

    };
    render() {
        const navigate = this.props.navigation
        // console.log(navigate.getParam('id'));
        return (
            <View style={styles.container}>
                <Text>Detail!</Text>
                <Text>id: {navigate.getParam('id')}</Text>
                <Text>value: {navigate.getParam('value')}</Text>
                <View style={{ backgroundColor: 'blue', height: 60, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Button
                        title="go to Detail"
                        color="#fff"
                        onPress={() => {
                            navigate.push('Detail', {
                                id: Math.floor(Math.random() * 100),
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
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: 'Home',
        headerStyle: {
            backgroundColor: "#2A60E4"
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
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