import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useGetPeopleQuery } from "../store/slices/api";
import { useState } from "react";
import PeopleItem from "../components/PeopleItem";
import ScreenContainer from "../components/ScreenContainer";
import Heart from "../assets/Heart";
import { moderateScale } from "react-native-size-matters";
import ChevronLeft from "../assets/ChevronLeft";
import Button from "../components/Button";
import {
  deleteAllFavourites,
  favouritesUsers,
} from "../store/slices/favourites";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import Counter from "../components/Counter";
import { TextInput } from "react-native-gesture-handler";

const FansScreen = () => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(favouritesUsers);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data } = useGetPeopleQuery({ page: page, name: search });

  let femaleFans = 0;
  let maleFans = 0;
  let otherFans = 0;

  favourites.forEach(fav => {
    switch (fav.gender) {
      case "female":
        femaleFans += 1;
        break;
      case "male":
        maleFans += 1;
        break;
      default:
        otherFans += 1;
        break;
    }
  });

  const nextPage = () => {
    if (data && page < Math.ceil(data.count / 10)) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (data && page > 1) {
      setPage(page - 1);
    }
  };

  const calculateCurrentItemsRange = (page: number, totalCount: number) => {
    const start = (page - 1) * 10 + 1;
    let end = page * 10;
    end = end > totalCount ? totalCount : end;
    return { start, end };
  };

  const { start, end } = calculateCurrentItemsRange(
    page,
    data ? data.count : 0,
  );

  const listHeaderComponent = () => {
    return (
      <View style={styles.header}>
        <View style={{ marginRight: moderateScale(30) }}>
          <Heart fill={"black"} stroke={"black"} />
        </View>
        <Text>Name</Text>
      </View>
    );
  };

  const listFooterComponent = () => {
    return (
      <View style={styles.listFooter}>
        {data && data?.results.length > 0 && (
          <>
            <Text>
              {start} - {end}
            </Text>
            <TouchableOpacity
              hitSlop={8}
              style={styles.arrow}
              onPress={previousPage}>
              <ChevronLeft />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={8}
              style={[{ transform: [{ rotate: "180deg" }] }, styles.arrow]}
              onPress={nextPage}>
              <ChevronLeft />
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  return (
    <ScreenContainer>
      <View style={styles.counterContainer}>
        <Counter title='Female fans' number={femaleFans} />
        <Counter title='Male fans' number={maleFans} />
        <Counter title='Others' number={otherFans} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder='Search by name'
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        keyExtractor={item => item.name}
        data={data?.results}
        maxToRenderPerBatch={10}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "rgba(0,0,0,0.2)" }} />
        )}
        windowSize={10}
        ListEmptyComponent={
          <View style={styles.listEmptyText}>
            <Text>No results</Text>
          </View>
        }
        renderItem={({ item }) => <PeopleItem item={item} />}
      />
      <Button
        title='Clear fans'
        onPress={() => dispatch(deleteAllFavourites())}
        style={{ marginVertical: moderateScale(12) }}
      />
    </ScreenContainer>
  );
};

export default FansScreen;

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: moderateScale(12),
  },
  input: {
    borderWidth: 1,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    marginBottom: moderateScale(12),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    padding: moderateScale(8),
  },
  contentContainerStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
  },
  listEmptyText: {
    paddingVertical: moderateScale(16),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: moderateScale(40),
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
  arrow: {
    marginHorizontal: moderateScale(8),
  },
});
