const os = require("os")
const child = require("child_process")


child.exec("node child", (error, sor, sorerr) => {
    if(error){
        throw error
    }
    console.log("正确情况下", sor)
    // console.log("错误情况下",sorerr)
})
// console.log(os.cpus().length)
let oppo = child.spawn("node",["child"])

oppo.stdout.on("data",(data)=>{
    console.log("oppo",data.toString())
})

