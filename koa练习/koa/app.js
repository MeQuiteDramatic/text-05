const koa = require("koa")
const router = require("./routers")
const path = require("path")
const app = new koa()
const static = require("koa-static")
const bodyparser = require("koa-bodyparser")

app.use(static(path.join(process.cwd(), "public")))

app.use(bodyparser())


app.use(router.routes())
app.use(router.allowedMethods())



app.listen(7001,()=>{
    console.log("服务已启动")
})