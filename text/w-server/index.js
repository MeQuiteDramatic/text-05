let Koa = require("koa")
let static = require("koa-static")
let path = require("path")
let fs = require("fs")

let app = new Koa()

app.use(async (ctx, next) => {
    let url = ctx.path
    console.log(__dirname,url)
    next()
})







app.use(static(process.cwd()))

module.exports = app