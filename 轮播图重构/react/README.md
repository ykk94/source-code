这次 webpack 的内容是自己搭建 react 开发环境, 上课用的方案是 `create-react-app` 工具, 这个工具一般称之为「脚手架」, 即建造房子时用的脚手架
包含了快速初始化项目, 运行项目, 测试项目等功能

开发 react 应用需要 `react` 和 `react-dom` 这两个库, 直接通过 `yarn install` 安装即可
另外由于 react 一般会使用 `jsx`, 所以还要支持 `jsx`, 这部分借助 `babel` 和 `webpack` 实现

1. babel 配置
babel 配置一般是写在 `.babelrc` 文件中, 这里直接设置 `presets` 的值为 `["env","react",]` (注意,  `babelrc` 不是严格 JSON 格式, 所以数组最后一个元素可以加上 `,`)

2. webpack 配置
参考 `webpack.config.js` 中 `loader` 配置
