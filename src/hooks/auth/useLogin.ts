import { z } from "zod";
import { string } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { LoginFormValues } from "../../types/formValues";

export const useLogin = () => {
  const schema = z.object({
    email: string(),
    password: string(),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {};

  return { schema, onSubmit };
};
