import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    contonar : {
        flex: 1,
        flexDirection:'column-reverse',
        marginTop:50,
    },
    red: {
        // flex:1,
        backgroundColor:'red',
        width:50,
        height:50,
    },
    blue: {
        // flex:2,
        backgroundColor:'blue',
        width:50,
        height:50,
    },
    green: {
        // flex:3,
        width:50,
        height:50,
        backgroundColor:'green'
    }
})

class InfoStyle extends React.Component {
    render() {
        return (
            <View style={styles.contonar}>
                <Text style={styles.red}/>
                <Text style={styles.blue}/>
                <Text style={styles.green}/>
            </View>
        )
    }
}

export default  InfoStyle