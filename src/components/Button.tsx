import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ title, onPress, style }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    borderRadius: moderateScale(16),
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(16),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
