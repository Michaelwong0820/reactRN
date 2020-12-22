import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';


class Blink extends React.Component {
    state = {
        isShow: true
    }
    componentDidMount() {
        this.inter = setInterval(() => {
            this.setState((perStatus) => ({
                isShow: !perStatus.isShow
            }))
        }, 2000)
    }
    componentWillUnmount() {
        clearInterval(this.inter)
    }
    render() {
        if (!this.state.isShow) {
            return null
        }
        return (
            <View>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {/* <Blink text="小米" />
                <Blink text="华为" /> */}
            </View>

        )
    }
}
