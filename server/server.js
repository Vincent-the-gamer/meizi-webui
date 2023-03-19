const express = require("express")
const axios = require("axios")

const app = express()


// 获取妹子图片
async function getMeizi(isR18, num){
    return axios.get("https://sex.nyan.xyz/api/v2",{
        params: {
          r18: isR18,
          num: num*1
        }
    })
}

//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 转发请求
app.get("/getMeizi", (req, res) => {
   const { r18, num } = req.query;
   getMeizi(r18, num).then(
     val => res.send( val.data ),
     err => res.send( err.message )
   )
})


app.listen(2334, () => {
    console.log("服务已启动在本机的: 2334端口")
})


