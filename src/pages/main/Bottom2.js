import React from 'react'
import { Text, View, FlatList, StyleSheet,ActivityIndicator } from 'react-native'

const PROVINCE_CITY = [{ city: '广东', id: 1001 }, { city: '上海', id: 1002 }, { city: '重庆', id: 1003 }, { city: '北京', id: 1004 }, { city: '湖南', id: 1005 }]

class Page2Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: PROVINCE_CITY,
            isLoading: false
        }
    }
    _renderItem = (item) => {
        return (
            <View style={styles.container}>
                <Text style={styles.city}>{item.city}</Text>
            </View>
        )
    }
    renderData = () => {
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            const newData = [{ city: '东莞', id: 1011 }, { city: '广州', id: 1012 }, { city: '深圳', id: 1013 }, { city: '中山', id: 1014 }, { city: '惠州', id: 1015 }]
            this.setState({
                isLoading: false,
                data: newData
            })
        }, 2000)
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
                data: [...this.state.data,...newData]
            })
        }, 2000)
    }
    render() {
        return (
            <View>
                <View style={[styles.container, { backgroundColor: 'green' }]}>
                    <Text style={styles.city}>
                        update:msg
                    </Text>
                </View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => this._renderItem(item)}
                    refreshing={this.state.isLoading}
                    onRefresh={() => {
                        this.renderData()
                    }}
                    ListFooterComponent={
                        this.loadComponent()
                    }
                    onEndReached={()=>{
                        this.endData()
                    }}
                    onEndReachedThreshold={0.1}
                />
            </View>
        )
    }
}
export default Page2Screen

const styles = StyleSheet.create({
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