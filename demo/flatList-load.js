import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.contairner}>
                <Text>Home</Text>
                <ActivityIndicator size="small" color="#00ff00" />
                <Button
                    title="goPage"
                    color='red'
                    onPress={() => {
                        this.props.navigation.navigate('Page')
                    }}
                />
            </View>
        )
    }
}

const PROVINCE_CITY = [{ city: '广东', id: 1001 }, { city: '上海', id: 1002 }, { city: '重庆', id: 1003 }, { city: '北京', id: 1004 }, { city: '湖南', id: 1005 }]

class PageScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRef: false,
            data: PROVINCE_CITY
        }
    }
    pageItem = (item) => {
        return (
            <View style={styles.city}>
                <Text style={styles.cityText}>{item.city}</Text>
            </View>
        )
    }
    loadPage = () => {
        this.setState({
            isRef: true
        })
        setTimeout(() => {
            const dataNew = [{ city: '江苏', id: 1007 }, { city: '新疆', id: 1008 }, { city: '东北', id: 1009 }]
            const dataOld = this.state.data
            const data = [...dataNew, ...dataOld]
            this.setState({
                data: data,
                isRef: false
            })
        }, 1000)
    }
    loadComponent = () => {
        return (
            <View style={styles.loadComponents}>
                <ActivityIndicator style={styles.indicator} size="large" color="#0000ff" animating={true} />
            </View>
        )
    }
    loadDate = () => {
        this.setState({
            isRef: true
        })
        setTimeout(() => {
            const dataNew = [{ city: '广西', id: 1011 }, { city: '云南', id: 1012 }, { city: '四川', id: 1013 }]
            const dataOld = this.state.data
            const data = [...dataOld, ...dataNew]
            this.setState({
                data: data,
                isRef: false
            })
        }, 2000)
    }
    render() {
        return (
            <View style={styles.pageContairner}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.pageItem(item)}
                    // refreshing={this.state.isRef}
                    // onRefresh={()=>{
                    //     this.loadPage()
                    // }}
                    refreshControl={
                        <RefreshControl
                            tintColor="#f00"
                            title="正在加载..."
                            colors={['#ee3ff2', '#h4322g', '#a22334']}
                            tintColor='#ee3ff2'
                            refreshing={this.state.isRef}
                            onRefresh={() => {
                                this.loadPage()
                            }}
                        />
                    }
                    listFooterComponent={this.loadComponent}
                    onEndReachedThreshold='0.3'
                    onEndReached={() => {
                        this.loadDate()
                    }}
                />
            </View>
        )
    }
}

const App = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Page: {
        screen: PageScreen,
        navigationOptions: {
            title: 'Page'
        }
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTintColor: '#f0f',
        headerTitleStyle: {
            fontSize: 18,
            fontWeight: '900'
        }
    }
})

const styles = StyleSheet.create({
    contairner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageContairner: {
        flex: 1,
        justifyContent: 'center'
    },
    city: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 20
    },
    cityText: {
        fontSize: 16,

    },
    loadComponents: {
        alignSelf: 'center',
    },
    indicator: {
        margin: 10
    }
})

export default createAppContainer(App)