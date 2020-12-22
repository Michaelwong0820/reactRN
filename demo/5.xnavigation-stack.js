import React from 'react'
import { View, Text, Button, SectionList, SafeAreaView, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                    title="goToPage"
                    color="#f00"
                    onPress={() => {
                        this.props.navigation.navigate('Section', { id: 1, name: 'john' })
                    }}
                />
            </View>
        )
    }
}
class LogoTitle extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Image
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603967495082&di=7380af7856300c5cfd6617c7e136845c&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F03%2F26%2Fcafc6ea253bc2ebc78918dc44c8671c7.jpg' }}
                style={{ width: 30, height: 30 }}
            />
        )
    }
}

const DATA_CITY = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];
class SectionScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: DATA_CITY
        }
    }
    _renderItems = (item) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
            </View>
        )
    }
    _sectionHeader = ({ section: { title } }) => {
        return (
            <Text style={styles.header}>{title}</Text>
        )
    }
    render() {
        console.log(this.props);
        const { params } = this.props.route
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={this.state.data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => this._renderItems(item)}
                    renderSectionHeader={(item) => this._sectionHeader(item)}
                />
            </SafeAreaView>
        )
    }
}

const Stack = createStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: '600',
                },
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#ff0034"
                }
            }}>
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        title: 'My Home',
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: '600',
                        },
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#ff0034"
                        },
                        headerTitle: (props) => <LogoTitle {...props}/>
                    }} />
                <Stack.Screen name="Section" component={SectionScreen}
                    options={({ route }) => {
                        return {
                            title: route.params.name
                        }
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});
