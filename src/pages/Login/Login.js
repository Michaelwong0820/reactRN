import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LoginScreen</Text>
                <Button
                    title="Resit"
                    onPress={() => {
                        this.props.navigation.navigate('Resit')
                    }}
                />
                <Button
                    title="Login"
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                />
            </View>
        )
    }
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})