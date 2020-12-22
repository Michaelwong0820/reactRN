import AsyncStorage from "@react-native-community/async-storage"

class Storage {
    static save =async (key,value) => {
        // AsyncStorage.setItem(key,value,(err)=>{
        //     err&&console.log(err);
        // })
        // AsyncStorage.setItem(key,value)
        // .catch(err=>{
        //     err&&console.log(err);
        // })
        try {
            await AsyncStorage.setItem(key,JSON.stringify(value))
        } catch (err) {
            err&&console.log(err);
        }
    }
    static get = (key) => {
        // AsyncStorage.getItem(key,(err,res)=>{
        //     err&&console.log(err);
        //     return JSON.parse(res)
        // })
        AsyncStorage.getItem(key)
        .catch(err => {
            err && console.log(err);
        })
        .then(value => {
            return JSON.parse(value)
        })
    }
    static update = async(key,value) => {
        try{
            await AsyncStorage.removeItem(key)
            await AsyncStorage.setItem(key,JSON.stringify(value))
        }catch(err) {
            err&&console.log(err);
        }
    }
    static delete = (key) => {
        AsyncStorage.removeItem(key,(err)=>{
            err&&console.log(err);
        })
    }
    static merge = (key,value) => {
        AsyncStorage.mergeItem(key,JSON.stringify(value),(err)=>{
            err&&console.log(err);
        })
    }
    static clear = () => {
        AsyncStorage.clear()
    }
}

export default Storage