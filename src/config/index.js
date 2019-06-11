const devPort = process.env.npm_config_devport || 3000
const devHost = 'localhost'

module.exports = {
  // 构建结果输出目录
  outputPath: 'dist',
  // node server 目录
  entry: {
    client: './client/pages',
    server: './server'
  },
  // 文件名
  filename: {
    assets: 'assets.json',
    vendor: 'vendor.json'
  },
  // webpack dev server默认配置
  devServer: {
    port: devPort,
    host: devHost,
    getPublicPath: (host = devHost, port = devPort) => `http://${host}:${port}/dist/`
  },
  // 默认的通用库
  defaultVendor: [
    'react',
    'react-dom'
  ]
}
