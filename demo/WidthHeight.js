import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

// react-native 宽高设置不需要设置单位 === 代表独立像素
// android 设备 宽高自动解析成 dp 单位 , 字体大小自动解析成 sp 单位
// ios 设备 宽高自动解析成 pt 单位

const styles = StyleSheet.create({
    pickOne: {
        backgroundColor: 'skyblue',
        width: 60,
        height: 60
    },
    pickTwo: {
        backgroundColor: 'pink',
        width: 80,
        height :80
    }
})

class InfoStyle extends React.Component {
    render() {
        return (
            <View style={{marginTop:50}}>
                <View style={styles.pickOne}></View>
                <View style={styles.pickTwo}></View>
            </View>
        )
    }
}

export default  InfoStyle