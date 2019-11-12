const connect = require("./index")

module.exports = (sql, parser = []) => {
    return new Promise((resolve, reject) => {
        connect.query(sql, parser, (error, data) => {
            if (error) {
                reject({
                    msg: "error",
                    error
                })
            } else {
                resolve({
                    msg: "OK",
                    data
                })
            }
        })
    })

}