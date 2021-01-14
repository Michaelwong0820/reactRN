import TYPE from '../types'

export function actionBookNet (data) {
    return {
        type:TYPE.TYPE_DATA_BOOK,
        data
    }
}

export function actionBookFresh (data)  {
    return {
        type: TYPE.TYPE_BOOK_FRESH,
        data,
        category
    }
}

export function actionBookAsync (data) {
    return (dispatch)=> {
        const url = `http://apis.juhe.cn/goodbook/catalog?dtype${data}=&key=74ffe3d155ebe5e77a692dfa6b0c6e9a`
        fetch(url)
        .then(response=>{
            if(response.ok) {
                return response.json()
            }
            throw new Error('network is error')
        })
        .then(res=>{
            const action = actionBookNet(res)
            dispatch(action)
        })
        .catch(e=>{
            console.log(e);
        })
    }
}

export function actionBookList(data) {
    return {
        data,
        type:TYPE.TYPT_BOOK_NET
    }
}

export function actionBookListNet(data) {
    return (dispatch) => {
        const url = `http://apis.juhe.cn/goodbook/query?catalog_id=${data}&pn=1&rn=10&dtype=json&key=74ffe3d155ebe5e77a692dfa6b0c6e9a`
        fetch(url)
        .then(response=>{
            if(response.ok) {
                return response.json()
            }
            throw new Error('network is error')
        })
        .then(res=>{
            // console.log('net',res.result);
            const action = actionBookList(res)
            dispatch(action)
        })
        .catch(e=>{
            console.log(e);
        })
    }
}