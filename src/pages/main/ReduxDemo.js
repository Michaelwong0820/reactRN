import React from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import store from '../../store/index'
import { actionWeather } from '../../store/action/actionCreator'
class ReduxScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleState)
    }
    handleState = () => {
        this.setState(store.getState())
    }
    loadData = (weather) => {
        const action = actionWeather(weather)
        console.log(action);
        store.dispatch(action)
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>redux</Text>
                <Text>{this.state.weather}</Text>
                <Button title="click me" onPress={() => {
                    this.loadData('sunny')
                }} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 0.5
    }
})
export default ReduxScreen