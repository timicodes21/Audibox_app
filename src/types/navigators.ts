import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
  Auth: undefined;
  Dashboard: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Signup: undefined;
  Login: undefined;
  Verification: undefined;
};

type WelcomeProps = NativeStackScreenProps<AuthStackParamList, "Welcome">;

// Navigation and Route Type
// type WelcomeScreenNavigationProp = WelcomeProps["navigation"];
// type WelcomeScreenRouteProp = WelcomeProps["route"];
export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Welcome"
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Login"
>;

export type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Signup"
>;

export type VerificationScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Verification"
>;

export type WelcomeScreenRouteProp = RouteProp<AuthStackParamList, "Welcome">;
