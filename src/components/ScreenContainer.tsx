import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const ScreenContainer = ({ children }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='never'>
      {children}
    </ScrollView>
  );
};

export default ScreenContainer;
