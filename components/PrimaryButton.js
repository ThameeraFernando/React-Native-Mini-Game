import { View, Text, Pressable, StyleSheet } from "react-native";

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
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
