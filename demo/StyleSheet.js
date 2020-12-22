import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    red: {
        color:'red'
    },
    blue: {
        color:"blue"
    },
    bigRed: {
        color: 'red',
        fontWeight : '600',
        fontSize: 30
    },
    bigBlue: {
        color: 'blue',
        fontWeight: '600',
        fontSize : 30
    }
})

class InfoStyle extends React.Component {
    render() {
        return (
            <View style={{marginTop:50}}>
                <Text style={styles.red}>Just red</Text>
                <Text style={styles.blue}>Just blue</Text>
                <Text style={[styles.bigBlue,styles.red]}>BigBlue and red</Text>
                <Text style={[styles.bigRed, styles.blue]}>BigRed and blue</Text>
            </View>
        )
    }
}

export default  InfoStyle