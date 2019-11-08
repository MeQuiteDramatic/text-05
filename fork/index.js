const http = require("http")

const child = require("child_process")
const Len = require("os").cpus().length

let workPid = {

}

//创建服务
let server = http.createServer()
//监听端口号
server.listen(3000, () => {
    console.log("服务已启动")
})
//循环创建子进程
for (var i = 0; i < Len; i++) {
    fn()
}

//封装创建子进程函数
function fn() {
    //创建子进程
    let child_fork = child.fork("./worker")

    console.log(child_fork.pid)
    workPid[child_fork.id] = child_fork;
    //向子进程发送服务
    child_fork.send("server", server)
    //监听子进程是否有异常退出 如果有 重新创建
    child_fork.on("exit", () => {
        fn()
    })
}

//监听主进程 如果退出 把所有子进程也关闭
process.on("exit", () => {
    for (let i in workPid) {
        workPid[i].kill()
    }
})







