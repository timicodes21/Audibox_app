import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { string } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { LoginFormValues } from "../../types/formValues";
import { LoginScreenNavigationProp } from "../../types/navigators";

export const useLogin = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const navigate = (screen: "Login" | "Signup") => {
    navigation.navigate(screen);
  };

  const schema = z.object({
    email: string(),
    password: string(),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {};

  return { schema, onSubmit, navigate };
};
