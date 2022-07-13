module.exports = {
  // 配置要使用的  PostCSS 插件
  plugins: {
    // 配置使用autoprefixer 插件
    // 作用：生成浏览器CSS样式规则前缀
    // autoprefixer: {
    //   //autoprefixer插件的配置
    //   //配置兼容的环境信息
    //   //VueCli 内部已经配置了autoprefixer插件
    //   //所以又配置了一次，所以产设了冲突
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 配置postcss-pxtorem插件
    // 作用：把px转换为 rem
    'postcss-pxtorem': {
      // lib-flexible 的 rem 适配方案：把一行分为 10 份，每份就是十分之一
      // 所以 rootValue 应该设置为你的设计稿宽度的十分之一
      // 我们的设计稿是750 所以应该设置为750/10 =75
      // 但是Vant 建议设置为375 为什么？ 因为Vant 是基于375写的
      // 所以必须设置为375，唯一的缺点就是设计稿的尺寸都要除2
      // 有没有更好的办法
      // 如果是Vant的样式就按照 37.5 来转换
      // 如果是我们自己的样式，就按照 75 来转换
      // 通过查阅文档，我们发现 rootValue 支持两种类型
      // 数字：固定数值
      // 函数：可以动态处理
      //       postcss-pxtorem 处理每个 CSS文件的时候都会去调用这个函数
      //         它会把被处理的 CSS 文件相关的信息通过参数传递给该函数

      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },

      //   rootValue: 37.5,

      // 配置要转换的 CSS 属性
      //   propList: ['height']
      // * 表示所有属性
      propList: ['*']
    }
  }
}
