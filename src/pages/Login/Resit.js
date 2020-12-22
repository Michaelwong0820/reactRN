import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ResitScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ResitScreen</Text>
                <Button
                    title="Login"
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                />
            </View>
        )
    }
}

export default ResitScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})