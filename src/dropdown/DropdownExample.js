import React from "react";
import { View } from "react-native";

import { Dropdown } from "./index";

const options = [
  { name: "Item One" },
  { name: "Item Two" },
  { name: "Item Three" },
];

export default function DropdownExample() {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 20,
      }}
    >
      <Dropdown options={options} />
      <Dropdown options={options} />
      <Dropdown options={options} />
    </View>
  );
}
