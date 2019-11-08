#! /usr/bin/env node

let {version} = require("../package.json")

let prop = 8080;
let app = require("../w-server")

if(process.argv[2]==="-v"){
console.log(version)
}
if(process.argv[2]==="-p"&&process.argv[3]){

    prop = process.argv[3]
}


app.listen(prop,()=>{
    console.log("服务启动中")
})