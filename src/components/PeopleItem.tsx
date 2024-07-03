import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Heart from "../assets/Heart.jsx";
import { moderateScale } from "react-native-size-matters";
import { Character } from "../types/index.ts";
import { useAppDispatch, useAppSelector } from "../hooks/store.ts";
import {
  addToFavourite,
  deleteFromFavourite,
  favouritesUsers,
} from "../store/slices/favourites.ts";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStackNavigator.tsx";
import ChevronLeft from "../assets/ChevronLeft";

type Props = {
  item: Character;
};

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>;

const PeopleItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(favouritesUsers);
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const isFavourite = favourites.some(elem => elem.name === item.name);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        hitSlop={8}
        onPress={() =>
          isFavourite
            ? dispatch(deleteFromFavourite(item))
            : dispatch(addToFavourite(item))
        }
        style={styles.text}>
        <View style={styles.heart}>
          <Heart fill={isFavourite ? "red" : "white"} stroke={"red"} />
        </View>
        <Text>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ transform: [{ rotate: "180deg" }] }}
        onPress={() => navigation.navigate("Details", { item: item })}>
        <ChevronLeft />
      </TouchableOpacity>
    </View>
  );
};

export default PeopleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(8),
  },
  heart: {
    marginRight: moderateScale(30),
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: moderateScale(20),
  },
});
