import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import {
  useAnimatedValue,
  AnimatedBlock,
  bInterpolate,
  makeAnimatedComponent,
  AnimatedText,
} from "react-native-ui-animate";

const AnimatedTouchableOpacity = makeAnimatedComponent(TouchableOpacity);
const AnimatedIcon = makeAnimatedComponent(FeatherIcon);

const OPTION_HEIGHT = 60;

export const Dropdown = ({ options }) => {
  const [expand, setExpand] = React.useState(false);
  const expandAnimation = useAnimatedValue(expand);

  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <AnimatedTouchableOpacity
        style={{
          padding: 24,
          backgroundColor: bInterpolate(expandAnimation.value, [
            "#ffffff",
            "#3399ff",
          ]),
          borderRadius: 10,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#e1e1e1",
          shadowOpacity: 0.2,
          shadowColor: "#000",
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 4 },
          zIndex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          setExpand((prev) => !prev);
        }}
        activeOpacity={0.8}
      >
        <AnimatedText
          style={{
            flex: 1,
            color: bInterpolate(expandAnimation.value, ["#353535", "#ffffff"]),
          }}
        >
          Toggle Dropdown
        </AnimatedText>
        <AnimatedIcon
          style={{
            transform: [
              {
                rotate: bInterpolate(expandAnimation.value, [
                  "0deg",
                  "-180deg",
                ]),
              },
            ],
            color: bInterpolate(expandAnimation.value, ["#353535", "#ffffff"]),
          }}
          name="chevron-down"
          size={24}
        />
      </AnimatedTouchableOpacity>

      <AnimatedBlock
        style={{
          height: bInterpolate(expandAnimation.value, [
            0,
            OPTION_HEIGHT * options.length,
          ]),
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#e1e1e1",
          borderRadius: 10,
          opacity: expandAnimation.value,
          transform: [
            { translateY: bInterpolate(expandAnimation.value, [-20, 0]) },
          ],
        }}
      >
        {options.map(({ name }, index) => (
          <TouchableOpacity
            key={index}
            style={{
              height: OPTION_HEIGHT,
              justifyContent: "center",
              paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#f1f1f1",
              backgroundColor: "#fff",
            }}
            onPress={() => alert(`${name} - clicked`)}
            activeOpacity={0.8}
          >
            <Text>{name}</Text>
          </TouchableOpacity>
        ))}
      </AnimatedBlock>
    </View>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};
