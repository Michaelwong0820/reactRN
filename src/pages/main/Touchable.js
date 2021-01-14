import React from 'react'
import { View, Text, StyleSheet,Alert, TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback,Platform, TouchableNativeFeedback } from 'react-native'

class Touchable extends React.Component {
    _onPress = () => {
        // Alert('message')
        // console.log(1);
        Alert.alert('message')
    }
    _onLongPress = () => {
        Alert.alert('long message')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>page</Text>
                <TouchableOpacity onPress={()=>{
                    this._onPress()
                }}>
                    <View style={styles.button}>
                        <Text style={{color:'#fff'}}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback onPress={()=>{
                    this._onPress()
                }}  backgroundColor={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground:""}>
                    <View style={styles.button}>
                        <Text style={{color:'#fff'}}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onPress={()=>{
                    this._onPress()
                }}
                backgroundColor={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground:""}
                >
                    <View style={styles.button}>
                        <Text style={{color:'#fff'}}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={()=>{
                    this._onPress()
                }} 
                    onLongPress={()=>{
                        this._onLongPress()
                    }}
                underlayColor="#f00">
                    <View style={styles.button}>
                        <Text style={{color:'#fff'}}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
        alignItems: 'center'
    },
    button: {
        width:200,
        height:30,
        backgroundColor:'#2e7272',
        alignItems:'center',
        justifyContent:"center",
        marginBottom:20
    }
})

export default Touchable