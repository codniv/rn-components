import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const Dropdown = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Open Dropdown</Text>
      </TouchableOpacity>

      <View>
        <View>
          <Text>Dropdown Item 1</Text>
        </View>
        <View>
          <Text>Dropdown Item 2</Text>
        </View>
        <View>
          <Text>Dropdown Item 3</Text>
        </View>
        <View>
          <Text>Dropdown Item 4</Text>
        </View>
      </View>
    </View>
  );
};
