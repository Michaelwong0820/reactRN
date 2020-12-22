import React from 'react'
import {Text,View,Button,TextInput,StyleSheet} from 'react-native'

class FetchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:''
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
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                data:res
            })
        })
    }
    loadSearch2 = async() => {
        this.searchText = encodeURI(this.searchText)
        const url = `http://apis.juhe.cn/simpleWeather/query?city=${this.searchText}&key=a91cee95b92875ee341e57fc54ac09b1`
        const responents = await fetch(url)
        const res = await responents.json() // 只要有Promise 数据返回就能用await
        console.log(res);
        this.setState({
            data:res
        })
    } 
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Fetch</Text>
                <TextInput style={styles.input} onChangeText={text=>{
                    this.searchText = text==='shanghai'?'上海':''
                }}/>
                <Button 
                    title="get Data"
                    onPress={()=>{
                        this.loadSearch()
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input:{
        width:300,
        height:40,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:0.5
    }
})
export default FetchScreen