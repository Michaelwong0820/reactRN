import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>WelcomeScreen</Text>
            </View>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('root')
        },3000)
    }
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})