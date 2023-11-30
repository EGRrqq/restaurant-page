import { merge } from "webpack-merge";
import base from "./webpack.base.mjs";

export default merge(base, {
  mode: "production",
  devtool: "source-map",
});
