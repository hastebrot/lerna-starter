const path = require("path")
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin")

module.exports = async ({ config, mode }) => {
  // config.module.rules.push({
  //   test: /\.mdx$/,
  //   use: [
  //     {
  //       loader: "babel-loader",
  //     },
  //     {
  //       loader: "@mdx-js/loader",
  //       options: {
  //         compilers: [createCompiler({})],
  //       },
  //     },
  //   ],
  // })
  return config
}
