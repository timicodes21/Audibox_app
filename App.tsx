import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "./src/types/navigators";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { useFonts } from "expo-font";
import { Provider as PaperProvider } from "react-native-paper";
import CustomStatusBar from "./src/components/molecules/statusBar/CustomStatusBar";

export default function App() {
  const Stack = createStackNavigator<MainStackParamList>();
  const [loaded] = useFonts({
    Bahnschrift: require("./assets/fonts/Bahnschrift.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Dashboard"
            component={AuthNavigator}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </PaperProvider>
      <CustomStatusBar />
    </NavigationContainer>
  );
}
