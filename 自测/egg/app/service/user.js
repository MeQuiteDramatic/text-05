const { Service } = require("egg")

class UserService extends Service {
    //登录
    async login(username, password) {
        return await this.app.mysql.query(`select * from userlist where username='${username}' and password='${password}'`)
    }
    async list(){
        return await this.app.mysql.query("select * from list")
    }

}

module.exports = UserService



