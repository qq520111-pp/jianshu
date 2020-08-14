import axios from "axios";

function http(obj) {
    // 环境的切换
    if (process.env.NODE_ENV === 'development') {
        axios.defaults.baseURL = 'http://localhost:8853';
    } else if (process.env.NODE_ENV === 'debug') {
        axios.defaults.baseURL = 'https://www.ceshi.com';
    }

    return new Promise((resolve, reject) => {
        axios({
            method: obj.method || 'get',
            url: obj.url,
            data: obj.data || {},
        }).then(res => {
            resolve(res)
        }).catch(rej => {
            reject(rej)
        })
    })
}

export default http