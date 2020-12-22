import AsyncStorage from '@react-native-community/async-storage'
import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
class AsyncStorageScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            value: ''
        }
    }
    /**
     * {
            method:'get',
            headers:{
                'Accept':'application/json'
            }
        }
    */
    loadSearch = () => {
        // console.log(this.searchText);
        this.searchText = encodeURI(this.searchText)
        const url = `http://apis.juhe.cn/simpleWeather/query?city=${this.searchText}&key=a91cee95b92875ee341e57fc54ac09b1`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    data: res
                })
            })
    }
    loadSearch2 = async () => {
        this.searchText = encodeURI(this.searchText)
        const url = `http://apis.juhe.cn/simpleWeather/query?city=${this.searchText}&key=a91cee95b92875ee341e57fc54ac09b1`
        const responents = await fetch(url)
        const res = await responents.json() // 只要有Promise 数据返回就能用await
        console.log(res);
        this.setState({
            data: res
        })
    }

    saveData = () => {
        AsyncStorage.setItem('DATA', JSON.stringify(this.state.data)).catch(err => {
            err && console.log(err);
        })
    }
    removeData = () => {
        AsyncStorage.removeItem('DATA')
        .catch(err=>{
            err&&console.log(err);
        })
    }
    getData = () => {
        // AsyncStorage.getItem('DATA',(err,value)=>{
        //     err&&console.log(err);
        //     console.log(value);
        //     const data = JSON.parse(value)
        //     console.log(data);
        //     this.setState({
        //         value:data.result.city
        //     })
        // })
        AsyncStorage.getItem('DATA')
            .catch(err => {
                err && console.log(err);
            })
            .then(value => {
                const data = JSON.parse(value)
                console.log(data);
                this.setState({
                    value: data&&JSON.stringify(data.result) || 'no message'
                })
            })

        
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Fetch</Text>
                <TextInput style={styles.input} onChangeText={text => {
                    this.searchText = text === 'shanghai' ? '上海' : ''
                }} />
                <Button
                    title="get Data"
                    onPress={() => {
                        this.loadSearch()
                    }}
                />
                <Button
                    title="save Data"
                    onPress={() => {
                        this.saveData()
                    }}
                />
                <Button
                    title="get Data"
                    onPress={() => {
                        this.getData()
                    }}
                />
                <Button
                    title="remove Data"
                    onPress={() => {
                        this.removeData()
                    }}
                />
                <Text>{this.state.data && this.state.data.result.city}</Text>
                <Text>{this.state.value}</Text>
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
export default AsyncStorageScreen