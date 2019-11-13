const router = require("koa-router")()

const query = require("../db/query")


//添加
router.post("/api/add", async ctx => {
    let { remark, url, dates, time, type } = ctx.request.body
    if (remark && url) {
        let sql = "insert into banner (remark,url,dates,time,type) values (?,?,?,?,?)";
        let parser = [remark, url, dates, time, type];
        try {
            await query(sql, parser)
            ctx.body = {
                code: 1,
                msg: "添加成功"
            }
        } catch (error) {
            ctx.body = {
                code: 0,
                error
            }
        }

    } else {
        ctx.body = {
            code: 3,
            msg: "参数不整"
        }
    }


})
//删除
router.get("/api/del", async ctx => {
    let { id } = ctx.query
    let sql = `delete  from banner where id=${id}`
    try {
        await query(sql)
        ctx.body = {
            code: 1,
            msg: "删除成功"
        }
    } catch (error) {
        ctx.body = {
            code: 0,
            error
        }
    }
})

//查找
router.get("/api/list", async ctx => {
    let { limit = 1, count = 2 } = ctx.query
    let limitCount = (limit - 1) * count

    let sql = `select * from banner limit ${limitCount},${count}`


    try {
        let Index = await query("select count(*) from banner")
        let data = await query(sql)
        ctx.body = {
            code: 1,
            data,
            queryIndex: Index[0]["count(*)"]
        }
    } catch (error) {
        ctx.body = {
            code: 0,
            error
        }
    }
})

//修改 

router.post("/api/upd", async ctx => {
    let { remark, url, dates, time, id } = ctx.request.body

    if (id) {
        let flag = await query(`select * from banner where id = ${id}`)
        if (flag.length) {
            let sql = "update banner set remark=?,url=?,dates=?,time=? where id=?"
            let parser = [remark, url, dates, time, id]
            try {
                await query(sql, parser)
                ctx.body = {
                    code: 1,
                    msg: "修改成功"
                }
            } catch (error) {
                ctx.body = {
                    code: 1,
                    error
                }
            }
        } else {
            ctx.body = {
                code: 3,
                msg: "此id不存在"
            }
        }

    } else {
        ctx.body = {
            code: 3,
            msg: "参数不整"
        }
    }

})




module.exports = router