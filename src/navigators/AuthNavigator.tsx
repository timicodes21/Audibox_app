import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/navigators";
import WelcomeScreen from "../screens/auth/WelcomeScreen";

const AuthNavigator = () => {
  const Stack = createStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
