import React from 'react'
import { View, FlatList, Text, StyleSheet, Image } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import actionCreator from '../../../store/action/actionCreator'


class BookList extends React.PureComponent {
    constructor(props) {
        super(props)
        const initBookList = this.props.bookList
    }
    componentDidMount() {
        const { route, getBookList } = this.props
        getBookList(route.params.categoryId)
    }
    _renderItem = ({ item }) => {
        console.log(item);
        return (
            <View style={styles.content}>
                <Image source={{ uri: item.img }} style={styles.itemImage} />
                <View>
                    <Text>{item.title}</Text>
                    <Text style={{overflow:'hidden',width:200,flexWrap:'nowrap'}}>{item.tags}</Text>
                </View>
            </View>
        )
    }
    render() {
        const { bookList } = this.props
        console.log(bookList.result.data);
        if (bookList) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={bookList && bookList.result.data}
                        keyExtractor={(item, index) => {
                            return index
                        }}
                        renderItem={this._renderItem}
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
        alignItems: "center",
        // justifyContent: "center",
        width: 350,
        flexDirection:'row'
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

const mapStateToProps = (state) => {
    return {
        bookList: state.bookReducer.bookList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBookList(data) {
            dispatch(actionCreator.actionBookListNet(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList)