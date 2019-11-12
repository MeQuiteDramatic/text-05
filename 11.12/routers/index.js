const router = require("koa-router")()
const query = require("../db/query")

//删除
router.get("/api/del", async ctx => {
    let { id } = ctx.query
    let sql = `delete from rc_lx where id=${id}`
    let data = await query(sql)
    ctx.body = data
})

//添加
router.post("/api/add", async ctx => {
    let { username, password, tel } = ctx.request.body
    let sql = `insert into rc_lx (username,password,tel) values (?,?,?)`
    let data = await query(sql, [username, password, tel])
    if (data.msg === "OK") {
        ctx.body = {
            code: 1,
            msg: "添加成功"
        }
    } else {
        ctx.body = {
            code: 1,
            msg: "添加失败"
        }
    }
})
//列表
router.get("/api/list", async ctx => {
    let sql = "select * from rc_lx"
    let data = await query(sql)
    if (data.msg === "OK") {
        ctx.body = {
            code: 1,
            data
        }
    } else {
        ctx.body = {
            code: 1,
            msg: "添加失败"
        }
    }
})

//修改
router.post("/api/update", async ctx => {
    let { username, password, tel, id } = ctx.request.body

    let sql = "update rc_lx set username=?,password=?,tel=? where id=?"
    let parser = [username, password, tel, id];
    let data = await query(sql, parser)
    if (data.msg === "OK") {
        ctx.body = {
            code: 1,
            msg:"修改成功"
        }
    } else {
        ctx.body = {
            code: 1,
            msg: "修改失败"
        }
    }
})


module.exports = router