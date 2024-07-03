import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
