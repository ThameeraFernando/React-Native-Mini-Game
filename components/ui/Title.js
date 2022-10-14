import { Text, StyleSheet } from "react-native";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    padding: 5,
    borderColor: "white",
  },
});
