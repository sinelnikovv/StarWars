import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import DetailsScreen from "../screens/DetailsScreen";
import FansScreen from "../screens/FansScreen";
import { Character } from "../types";

export type RootStackParamList = {
  Fans: undefined;
  Details: { item: Character };
};

export type RootStackNavigatorScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Fans'>
      <RootStack.Screen name='Fans' component={FansScreen} />
      <RootStack.Screen name='Details' component={DetailsScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
