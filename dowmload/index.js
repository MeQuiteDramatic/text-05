const dowm = require("download-git-repo")

const child = require("child_process")

dowm("github:guowujuan456/download", "app", (error) => {
    if (error) {
        throw error
    }
    process.chdir("./app/vue-demo")
    child.exec("yarn")


})
