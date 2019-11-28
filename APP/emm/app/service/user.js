const { Service } = require("egg")

class UserService extends Service {
    //登录
    async login(params) {
        return await this.app.mysql.query('select * from userlist where username=? && password=?', params)
    }


    //权限请求列表
    async rights(rank) {
        return await this.app.mysql.query(`select title,routers from list_tit where whole like '%${rank}%'`)
    }

    async selectname(username){
        return await this.app.mysql.query(`select * from userlist where username='${username}'`)
    }
    async register(username,password){
        return await this.app.mysql.query('insert into userlist (username,password) values (?,?)',[username,password])
    }
}

module.exports = UserService