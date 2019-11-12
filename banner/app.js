const koa = require("koa")

const app = new koa();

const router = require("./router")
const bodyparser = require("koa-bodyparser")

app.use(bodyparser())

app.use(router.routes())
app.use(router.allowedMethods())


app.listen(7001,()=>{
    console.log("服务已启动")
})
