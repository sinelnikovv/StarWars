import React from "react";
import { RootStackNavigatorScreenProps } from "../navigation/RootStackNavigator";
import ScreenContainer from "../components/ScreenContainer";
import RowDetail from "../components/RowDetail";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ChevronLeft from "../assets/ChevronLeft";
import { moderateScale } from "react-native-size-matters";

type Props = RootStackNavigatorScreenProps<"Details">;

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <ScreenContainer>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <ChevronLeft />
        <Text
          style={{
            marginLeft: moderateScale(15),
          }}>
          Go back
        </Text>
      </TouchableOpacity>
      <RowDetail title='Name' text={item.name} />
      <RowDetail
        title='Gender'
        text={item.gender === ("Male" || "Female") ? item.gender : "Other"}
      />
      <RowDetail title='Height' text={item.height} />
      <RowDetail title='Mass' text={item.mass} />
      {item.hair_color !== "n/a" ? (
        <RowDetail title='Hair color' text={item.hair_color} />
      ) : (
        <></>
      )}
      <RowDetail title='Skin color' text={item.skin_color} />
      <RowDetail title='Eye color' text={item.eye_color} />
      {item.birth_year !== "unknown" ? (
        <RowDetail title='Birth year' text={item.birth_year} />
      ) : (
        <></>
      )}
    </ScreenContainer>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: moderateScale(10),
  },
});
