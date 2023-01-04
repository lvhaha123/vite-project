import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 别名配置
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  server: {
    port: 8090,//端口号
    host: 'localhost',
    open: true,//是否自动打开浏览器
  },
  /*静态资源服务的文件夹*/
  // publicDir:"public",
  /* 访问的静态资源加上base前缀*/
  // base: '/web/',
  //  生产环境
  build: {
    //指定输出路径
    // assetsDir: "./",
    // 指定输出文件路径
    outDir: "dist",
    // 代码压缩配置
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  //预览设置  npm run build　打包之后，会生成dist文件 然后运行npm run preview；vite会创建一个服务器来运行打包之后的文件
  preview: {
    port: 4000,//端口号
    host: 'localhost',
    open: true,//是否自动打开浏览器
  },
})
