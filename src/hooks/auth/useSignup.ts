import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { string } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { SignupFormValues } from "../../types/formValues";
import { SignupScreenNavigationProp } from "../../types/navigators";

export const useSignup = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();

  const navigate = (screen: "Login" | "Signup") => {
    navigation.navigate(screen);
  };

  const schema = z.object({
    userName: string(),
    email: string(),
    password: string(),
  });

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    navigation.navigate("Verification");
  };

  return { schema, onSubmit, navigate };
};
