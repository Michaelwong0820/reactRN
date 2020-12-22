import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

const storageUtils = new Storage({
    size:1000, //数量数
    // 存储引擎 不指定，存储在内存中，重启失效
    storageBackend:AsyncStorage,
    // 过期时间，传null 永不过期
    defaultExpires:24*3600*1000,
    // 读写缓存
    enableCache:true

})

export default storageUtils