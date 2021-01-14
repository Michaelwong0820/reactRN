import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import actionCreator from '../../../store/action/actionCreator'

var initCategory = 'top'

class TopScreen1 extends React.PureComponent {
    componentDidMount() {
        const { getBookData } = this.props
        getBookData()
    }
    goToDetail=(item)=> {
        // alert(item)
        this.props.navigation.navigate('bookList',{
            categoryId:item.id
        })
    }
    _renderItem = ({ item, index }) => {
        return (
          <ListItem item={item} onPressItem={()=>{this.goToDetail(item)}}/>
        // <Text>{item.catalog}</Text>

        )
    }
    reloadData = () => {
        const { getBookData, changeFresh } = this.props
        changeFresh(true)
        getBookData()
    }
    render() {
        const { bookData, isFreshing } = this.props
        if (bookData) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={bookData && bookData.result}
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
class ListItem extends React.PureComponent{
    _onPress = () => {
        this.props.onPressItem()
    }
    render() {
        const item = this.props.item
        return (
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>{
                // this.goToDetail(item)
                this._onPress()
            }}
        >
            <View style={styles.content}>
                <Text>{item.catalog}</Text>
                {/* <View style={styles.itemGroup1}><Text>{item.title}</Text></View>
                <View style={styles.itemGroup2}>
                    <Text style={{ marginRight: 10 }}>日期：{item.date}</Text>
                    <Text>作者：{item.author_name}</Text>
                </View>
                <View style={styles.itemGroup3}>
                    <Image source={{ uri: item.thumbnail_pic_s }} style={styles.itemImage} />
                    <Image source={{ uri: item.thumbnail_pic_s02 }} style={styles.itemImage} />
                    <Image source={{ uri: item.thumbnail_pic_s03 }} style={styles.itemImage} />
                </View> */}
            </View>
        </TouchableOpacity>
        )
    }
}

function mapStateToProps(state) {
    return {
        bookData: state.bookReducer.bookData,
        isFreshing: state.bookReducer.isFresh
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBookData() {
            dispatch(actionCreator.actionBookAsync())
        },
        changeFresh(data) {
            dispatch(actionCreator.actionBookFresh(data))
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
        justifyContent: "center",
        width:350
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

const TopCommonScreen1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopScreen1)

export default TopCommonScreen1

