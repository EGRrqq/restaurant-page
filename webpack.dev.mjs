import { merge } from "webpack-merge";
import base from "./webpack.base.mjs";

export default merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
});
