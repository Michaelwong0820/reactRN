import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

let storage = null
let size = 1000
let defaultExpires = 24 * 3600 * 1000

// 本地数据持久化

const createStorage = () => {
    storage = new Storage({
        size: size, //数量数
        // 存储引擎 不指定，存储在内存中，重启失效
        storageBackend: AsyncStorage,
        // 过期时间，传null 永不过期
        defaultExpires: defaultExpires,
        // 读写缓存
        enableCache: true

    })
}
// 单列模式
const initStorage = () => {
    if (!storage) {
        createStorage()
    }
}

// 进行二次封装
const _storage = {
    save(key, value) {
        initStorage()
        storage.save({
            key: key,
            data: value,
            expires: defaultExpires, //过期时间
        })
    },
    get(key, callback) {
        initStorage()
        storage.load({
            key: key,
            autoSync: true,
            syncInBackground: true,
            syncPrams: {
                extraFetchOptions: {

                },
                someFlag: true
            }
        }).then(res => {
            callback && callback(res)
            return res
        }).catch(err => {
            console.log(err.message);
        })
    },
    getAllDataForId(key, callback) {
        initStorage()
        storage.getAllDataForId(key).then(res => {
            callback && callback(res)
        })
    },
    clearMapForKey(key) {
        initStorage()
        storage.clearMapForKey(key)
    },
    remove(key) {
        initStorage()
        storage.remove({ key })
    },
    clear() {
        initStorage()
        storage.clear()
    }
}



export { _storage as storageUtils } 