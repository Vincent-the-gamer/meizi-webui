import { build } from "nuxt";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // 关闭Are you interested in participating的提示
    telemetry: false,
    ssr: false, // 使用spa模式
    devServer: {
        host: "0.0.0.0",
        port: 2333
    },
    app: {
        head: {
            title: "妹子",
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            noscript: [
                { children: 'JavaScript is required!!' }
            ]
        },
    }
})
