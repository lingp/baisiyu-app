// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {},
    "postcss-pxtorem": { // 此处为添加部分
      rootValue: 1080/16, //结果为：设计稿元素尺寸/16，算出比例，相当于1rem等于多少px
      unitPrecision: 5, // 保留到几位小数
      propList: ['*'],
      selectorBlackList: ['font-no-rem'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i
    }
  }
}
