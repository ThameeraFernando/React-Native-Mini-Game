import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  const pressHandler = () => {
    // console.log("button press");
    onPress();
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: { margin: 5, borderRadius: 28, overflow: "hidden" },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
