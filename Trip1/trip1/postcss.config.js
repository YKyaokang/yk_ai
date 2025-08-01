export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75, // 设计稿宽度/10，一般设计稿375px，所以设置为37.5。如果设计稿750px，则设置为75
      propList: ['*'], // 需要转换的属性，*表示所有
      selectorBlackList: [], // 忽略转换的选择器
      exclude: /node_modules/i, // 排除node_modules文件夹
      mediaQuery: false, // 允许在媒体查询中转换px
      minPixelValue: 2 // 设置要替换的最小像素值
    }
  }
}