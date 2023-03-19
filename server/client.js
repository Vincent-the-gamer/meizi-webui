const express = require("express")

const app = express()

app.use(express.static("./public"))

// 注意这里的端口是打包后在生产环境下运行的端口，
// 不需要再理会nuxt.config.ts的端口了，那个只管开发环境
app.listen(2333, () => {
    console.log("前端启动于端口: 2333")
})