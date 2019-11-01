### webpack is a module bundler
#### webpack打包速度
1. 技术的迭代
2. 在尽可能少的模块上应用Loader
3. js文件使用exclude,include
4. Plugin尽可能要精简并确保可靠
5. resolve参数合理配置，不要把所有的后缀都配置到resolve.extensions; resolve还可以配置alias对象
6. 使用DllPlugin提供打包速度：第三方模块只打包一次；引入第三方模块时使用dll文件，这时候需要做映射
   1. 重新生成一份配置文件webpack.dll.js，用来打包第三方文件
   2. npm install add-asset-html-webpack-plugin
   3. 在webpack.common.js中引入安装好的插件 
7. 控制包文件大小
8. 多进程打包：happypack, parallel-webpack, thread-loader
9. source-map：越详细，越慢
10. 结合stats分析打包结果
11. 开发环境内存编译
12. 开发环境无用插件剔除