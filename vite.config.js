import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// 引入插件，因为我使用的vite+ts，所以这里引入的是vite
import AutoImport from 'unplugin-auto-import/vite';
import Components from "unplugin-vue-components/vite";
//引入饿了么的组件，只要安装的ep,这里就会有提示的
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue(),
    AutoImport({
      // 全局注册
      imports: ['vue', 'vue-router', 'pinia'],
      // 配置声明文件的生成位置，就写在src下面，
      // 因为tscofig.ts里配置的就是从src下开始找声明文件
      dts: 'src/auto-imports.d.ts',
      // element-plus组件引入，比如ElMessage
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: "./src/components.d.ts",
      extensions: ["vue"],
      dirs: ["src/components/"],
      // 如果在这里引入element-plus的组件，在main.js的文件中就可以不用引了
      // resolvers: [ElementPlusResolver()],
    })],

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

      // 反向代理
      // proxy: {
      //   [env.VITE_APP_BASE_API]: {
      //     target: env.VITE_APP_API_HOST,
      //     changeOrigin: true,
      //     rewrite: path => path.replace(env.VITE_APP_BASE_API, '')
      //   }
      // },
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

  }

})
