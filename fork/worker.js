const http = require("http")
//创建服务
let servers = http.createServer((req, res) => {
    //判断接口，返回对应数据
    if (req.url === "/list") {
        let list = [{
            code: 1,
            data: {
                name: "李华",
                age: 18
            }
        }]
        res.end(JSON.stringify(list))
    } else if (req.url === "/error") {
        throw "error 错误利用"
    } else {
        res.end("JSON")
    }


})


//监听接收数据 
process.on("message", (flag, server) => {
    //判断传递参数是否是服务
    if (flag == "server") {
        //派发connection事件与子进程服务建立联系
        server.on("connection", (socket) => {
            //执行connection事件与子进程服务建立联系
            servers.emit("connection", socket)
        })
    }
})
//检测是否有错误 如果有 给返回
process.on("uncaughtException", (error) => {
    process.send({ msg: error })
})
