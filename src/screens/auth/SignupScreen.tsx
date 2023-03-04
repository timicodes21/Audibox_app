import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import AuthWrapper from "../../components/template/containers/AuthWrapper";
import { loginStyles as styles } from "../../styles/auth/login";
import { useForm, Controller } from "react-hook-form";
import { SignupFormValues } from "../../types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "../../components/atoms/formFields/AuthInput";
import InputErrorText from "../../components/atoms/texts/InputErrorText";
import { TextInput } from "react-native-paper";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import { usePasswordShow } from "../../hooks/utility/usePasswordShow";
import { useSignup } from "../../hooks/auth/useSignup";

const SignupScreen = () => {
  const { schema, navigate, onSubmit } = useSignup();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const { visible, toggleShow } = usePasswordShow();

  return (
    <AuthWrapper>
      <Text style={styles.headerText}>Get Started</Text>
      <View style={styles.questionContainer}>
        <Text style={{ ...styles.questionText }}>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigate("Login")}>
          <Text style={{ color: "#7F5AF0" }}> Sign in </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <>
          <Controller
            control={control}
            name="userName"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Username"
                placeholder="First and last Name"
                value={value}
                onBlur={onBlur}
                onChange={(value: string) => onChange(value)}
                leftIcon={
                  <TextInput.Icon
                    icon="account"
                    size={25}
                    iconColor="#878A93"
                  />
                }
              />
            )}
          />
          {errors?.userName && (
            <InputErrorText text={errors?.userName?.message ?? ""} />
          )}
        </>
        <>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Email"
                placeholder="Your email address"
                value={value}
                onBlur={onBlur}
                onChange={(value: string) => onChange(value)}
                leftIcon={
                  <TextInput.Icon icon="email" size={25} iconColor="#878A93" />
                }
              />
            )}
          />
          {errors?.email && (
            <InputErrorText text={errors?.email?.message ?? ""} />
          )}
        </>
        <>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Password"
                placeholder="Type your password"
                value={value}
                onBlur={onBlur}
                onChange={(value: string) => onChange(value)}
                leftIcon={
                  <TextInput.Icon icon="lock" size={25} iconColor="#878A93" />
                }
                rightIcon={
                  <TextInput.Icon
                    icon={visible ? "eye" : "eye-off"}
                    size={25}
                    iconColor="#878A93"
                    onPress={toggleShow}
                  />
                }
                secureTextEntry={!visible}
              />
            )}
          />
          {errors?.password && (
            <InputErrorText text={errors?.password?.message ?? ""} />
          )}
        </>
        <TouchableHighlight underlayColor="#F0F0F0">
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableHighlight>
        <View style={{ marginTop: 20, marginBottom: 15 }}>
          <PrimaryButton onPress={handleSubmit(onSubmit)}>
            Create Account
          </PrimaryButton>
        </View>
      </View>
    </AuthWrapper>
  );
};

export default SignupScreen;
