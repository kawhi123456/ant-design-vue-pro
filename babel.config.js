module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // 按需加载 不会一次性加载全部
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true
      }
    ] // `style: true` 会加载 less 文件
  ]
};
