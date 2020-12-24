import React from 'react'
import { Text, View, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import actionCreators from '../../store/action/actionCreator'

// const PROVINCE_CITY = [{ city: '广东', id: 1001 }, { city: '上海', id: 1002 }, { city: '重庆', id: 1003 }, { city: '北京', id: 1004 }, { city: '湖南', id: 1005 }]

class Page2Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initCity: '哈尔滨',
            // data: PROVINCE_CITY,
            isLoading: false
        }
    }
    _renderItem = (item) => {
        return (
            <View style={styles.container}>
                <Text style={styles.city}>{item.weather}</Text>
            </View>
        )
    }
    renderData = () => {
        const { getWeatherData,getWeatherFresh } = this.props
        getWeatherFresh(true)
        getWeatherData('上海')
        // this.setState({
        //     isLoading: true
        // })
    }
    loadComponent = () => {
        return (
            <View style={styles.loadComponents}>
                <ActivityIndicator style={styles.indicator} size="large" color="#0000ff" animating={true} />
            </View>
        )
    }
    endData = () => {
        console.log(1);
        setTimeout(() => {
            const newData = [{ city: '东莞', id: 1011 }, { city: '广州', id: 1012 }, { city: '深圳', id: 1013 }, { city: '中山', id: 1014 }, { city: '惠州', id: 1015 }]
            this.setState({
                data: [...this.state.data, ...newData]
            })
        }, 2000)
    }
    componentDidMount() {
        this.props.getWeatherData(this.state.initCity)
    }
    render() {
        const { weatherData,isFreshing } = this.props
        // console.log(this.props);
        // if(!weatherData) {
        //     return (<>
        //         </>)
        // }
        if (weatherData) {
            return (
                <View>
                    <View style={[styles.container, { backgroundColor: 'green' }]}>
                        <Text style={styles.city}>
                            {/* update:msg */}
                            {weatherData&&weatherData.result.city}
                        </Text>
                    </View>
                    <FlatList
                        data={weatherData && weatherData.result.future}
                        keyExtractor={(item) => {
                            return item.date
                        }}
                        renderItem={({ item }) => this._renderItem(item)}
                        refreshing={isFreshing}
                        onRefresh={() => {
                            this.renderData()
                        }}
                    // ListFooterComponent={
                    //     this.loadComponent()
                    // }
                    // onEndReached={()=>{
                    //     this.endData()
                    // }}
                    // onEndReachedThreshold={0.1}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.load}>
                    <ActivityIndicator
                        size="large" color="#0000ff" animating={true}
                    />
                </View>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        weatherData: state.weatherReducer.weather,
        isFreshing:state.weatherReducer.isFresh
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getWeatherData: (city) => {
            let action = actionCreators.actionWeatherData(city)
            dispatch(action)
        },
        getWeatherFresh: (flag) => {
            dispatch(actionCreators.actionWeatherFresh(flag))
        }
    }
}

const newScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page2Screen)

export default newScreen

const styles = StyleSheet.create({
    load: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        height: 200,
        marginBottom: 10,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    },
    city: {
        fontSize: 16,
        fontWeight: '600',
        color: "skyblue"
    },
    loadComponents: {
        alignSelf: 'center',
    },
    indicator: {
        margin: 10
    }
})