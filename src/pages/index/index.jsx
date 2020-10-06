import React from "react";
import { View } from "@tarojs/components";

import "./index.scss";

const Test = () => {
  return process.env.TARO_ENV === "weapp" ? (
    <test-weapp />
  ) : process.env.TARO_ENV === "alipay" ? (
    <test-dingtalk />
  ) : (
    <View>ohter</View>
  );
};

export default Test;
