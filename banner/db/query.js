const connect = require("./index")

module.exports = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        connect.query(sql, params, (error, data) => {
            if (error) {
                reject({
                    code: 0,
                    error
                })
            } else {
                resolve({
                    code: 1,
                    data
                })
            }
        })
    })



}









