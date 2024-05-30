import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function Button({ onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.text]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 2,
    borderRadius: 4,
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.primary50,
  },
});
