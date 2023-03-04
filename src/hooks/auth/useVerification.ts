import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { string } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { SignupFormValues } from "../../types/formValues";
import {
  SignupScreenNavigationProp,
  VerificationScreenNavigationProp,
} from "../../types/navigators";

export const useVerification = () => {
  const navigation = useNavigation<VerificationScreenNavigationProp>();

  const navigate = (screen: "Login" | "Signup") => {
    navigation.navigate(screen);
  };

  const schema = z.object({
    code: string(),
  });

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {};

  return { schema, onSubmit, navigate };
};
