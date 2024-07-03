import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

type Props = {
  title: string;
  number: number;
};

const Counter = ({ title, number }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{number}</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    width: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});
