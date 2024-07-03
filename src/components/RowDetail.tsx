import { StyleSheet, Text, View } from "react-native";
import Title from "./Title";
import { moderateScale } from "react-native-size-matters";

type Props = {
  title: string;
  text: string;
};

const RowDetail = ({ title, text }: Props) => {
  return (
    <View style={styles.row}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </View>
  );
};

export default RowDetail;

const styles = StyleSheet.create({
  row: {
    paddingVertical: moderateScale(8),
    flexDirection: "row",
    alignItems: "baseline",
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
  },
});
