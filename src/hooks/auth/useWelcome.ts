import { useNavigation } from "@react-navigation/native";
import { WelcomeScreenNavigationProp } from "../../types/navigators";

export const useWelcome = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const navigate = (screen: "Login" | "Signup") => {
    navigation.navigate(screen);
  };

  return { navigate };
};
