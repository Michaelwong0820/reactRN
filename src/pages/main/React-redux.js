import React from 'react'
import {View,Text,Button,TextInput,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import actionCreators from '../../store/action/actionCreator'
console.log(actionCreators);
class ReactRedux extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue:''
        }
    }
    componentDidMount() {
        this.props.initWeather('winner')
    }
    render() {
        const {weather,initWeather,getWeatherData} = this.props
        return (
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                <TextInput style={styles.input} onChangeText={(text)=>{
                    this.state.searchValue = text==='haerbin'?'哈尔滨':''
                }}/>
                <Text>{weather}</Text>
                <Button title="click me" onPress={()=>{initWeather('sunny')}}/>
                <Button title="net Data" onPress={()=>{getWeatherData(this.state.searchValue)}}/>
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
const mapStateToProp = (state)=> {
    return {
        weather:state.weather
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        initWeather : (weather) => {
            const action = actionCreators.actionWeather(weather)
            dispatch(action)
        },
        getWeatherData:(city)=> {
            const action = actionCreators.actionWeatherData(city)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(ReactRedux)