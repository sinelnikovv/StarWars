import { StyleSheet, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontSize: 18,
    width: moderateScale(100),
  },
});
