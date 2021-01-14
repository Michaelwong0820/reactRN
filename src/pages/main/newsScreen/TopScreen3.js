import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import actionCreator from '../../../store/action/actionCreator'

var initCategory = 'guonei'

class TopScreen3 extends React.Component {
    componentDidMount() {
        const { getNewsData } = this.props
        getNewsData(initCategory)
    }
    goToDetail=(item)=> {
        // alert(item.url)
        this.props.navigation.navigate('newsDetail',{
            url:item.url
        })
    }
    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>{
                    this.goToDetail(item)
                }}
            >
                <View style={styles.content}>
                    <View style={styles.itemGroup1}><Text>{item.title}</Text></View>
                    <View style={styles.itemGroup2}>
                        <Text style={{ marginRight: 10 }}>日期：{item.date}</Text>
                        <Text>作者：{item.author_name}</Text>
                    </View>
                    <View style={styles.itemGroup3}>
                        <Image source={{ uri: item.thumbnail_pic_s }} style={styles.itemImage} />
                        <Image source={{ uri: item.thumbnail_pic_s02 }} style={styles.itemImage} />
                        <Image source={{ uri: item.thumbnail_pic_s03 }} style={styles.itemImage} />
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    reloadData = () => {
        const { getNewsData, changeFresh } = this.props
        changeFresh(true,initCategory)
        getNewsData(initCategory)
    }
    render() {
        const { newsData, isFreshing } = this.props
        if (newsData) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={newsData && newsData.result.data}
                        keyExtractor={(item) => {
                            return item.uniquekey
                        }}
                        renderItem={this._renderItem}
                        refreshing={isFreshing}
                        onRefresh={this.reloadData}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>Loading.....</Text>
                </View>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        newsData: state.newsReducers[initCategory].newsData,
        isFreshing: state.newsReducers[initCategory].isFresh
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewsData(type) {
            dispatch(actionCreator.actionNewsData(type))
        },
        changeFresh(data,category) {
            dispatch(actionCreator.actionNewsFresh(data,category))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 200,
        marginBottom: 10,
        backgroundColor: '#fff',
        alignItems: "flex-start",
        justifyContent: "center"

    },
    itemGroup1: {
        flex: 1,
        fontWeight: '600'
    },
    itemGroup2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#eee'
    },
    itemGroup3: {
        flex: 2,
        flexDirection: 'row'

    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10
    }
})

const TopCommonScreen3 = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopScreen3)

export default TopCommonScreen3

