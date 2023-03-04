import { StatusBar } from "react-native";
import React from "react";

const CustomStatusBar = () => {
  return (
    <StatusBar
      animated={true}
      backgroundColor="#2CB67D"
      translucent={true}
      barStyle="light-content"
      showHideTransition="fade"
    />
  );
};

export default CustomStatusBar;
