import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  AnimatedBlock,
  useMountedValue,
  interpolate,
} from "react-native-ui-animate";

import { closeSnack } from "../snack.actions";
import Icon from "react-native-vector-icons/AntDesign";
import { colors, fonts, normalize } from "../../modules";

const wWidth = Dimensions.get("window").width;

export const SnackBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const message = "Sample Message for toast";
  const type = "success"; // or "error"

  const snackMounted = useMountedValue(modalVisible, [0, 1, 0], {
    onAnimationEnd: (value) => {
      if (modalVisible && value === 1) {
        setTimeout(() => {
          dispatch(closeSnack());
        }, 3000);
      }
    },
    useNativeDriver: true,
  });

  return snackMounted(
    (animation, mounted) =>
      mounted && (
        <AnimatedBlock
          style={[
            styles.snackContainer,
            {
              opacity: animation.value,
              backgroundColor:
                type === "success" ? "#4aa255" : colors.light.highlightColor,
              transform: [
                {
                  translateY: interpolate(animation.value, [0, 1], [-120, 0]),
                },
              ],
            },
          ]}
        >
          <View style={styles.snackInfo}>
            <Text style={styles.snackInfoText}>{message}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => dispatch(closeSnack())}
          >
            <Icon name="closecircle" size={20} color="#ffffff" />
          </TouchableOpacity>
        </AnimatedBlock>
      )
  );
};

const styles = StyleSheet.create({
  snackContainer: {
    position: "absolute",
    width: wWidth - 50,
    left: 50 / 2,
    right: 0,
    top: 20,
    backgroundColor: "#4aa255",
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    padding: 20,
    flexDirection: "row",
    elevation: 4,
  },
  snackInfo: {
    flex: 1,
  },
  snackInfoText: {
    fontFamily: fonts.family.AVERTA_SEMI_BOLD,
    color: "#FFF",
    fontSize: normalize(fonts.size.thin),
    flexShrink: 1,
  },
});
