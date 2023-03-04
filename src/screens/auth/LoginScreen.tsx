import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AuthWrapper from "../../components/template/containers/AuthWrapper";
import { loginStyles as styles } from "../../styles/auth/login";
import { useForm, Controller } from "react-hook-form";
import { LoginFormValues } from "../../types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../hooks/auth/useLogin";
import AuthInput from "../../components/atoms/formFields/AuthInput";
import InputErrorText from "../../components/atoms/texts/InputErrorText";

const LoginScreen = () => {
  const { schema } = useLogin();
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <AuthWrapper>
      <Text style={styles.headerText}>Welcome back</Text>
      <View style={styles.questionContainer}>
        <Text style={{ ...styles.questionText }}>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#7F5AF0" }}> Sign up </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <AuthInput
              label="Username"
              placeholder="Type your username"
              value={value}
              onBlur={onBlur}
              onChange={(value: string) => onChange(value)}
            />
          )}
        />
        {errors?.email && (
          <InputErrorText text={errors?.email?.message ?? ""} />
        )}
      </View>
    </AuthWrapper>
  );
};

export default LoginScreen;
