import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import AuthWrapper from "../../components/template/containers/AuthWrapper";
import { loginStyles as styles } from "../../styles/auth/login";
import { useForm, Controller } from "react-hook-form";
import { LoginFormValues } from "../../types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../hooks/auth/useLogin";
import AuthInput from "../../components/atoms/formFields/AuthInput";
import InputErrorText from "../../components/atoms/texts/InputErrorText";
import { TextInput } from "react-native-paper";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import { useIcons } from "../../hooks/utility/useIcons";
import { usePasswordShow } from "../../hooks/utility/usePasswordShow";

const LoginScreen = () => {
  const { schema, navigate } = useLogin();
  const { GoogleIcon } = useIcons();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const { visible, toggleShow } = usePasswordShow();

  return (
    <AuthWrapper>
      <Text style={styles.headerText}>Welcome back</Text>
      <View style={styles.questionContainer}>
        <Text style={{ ...styles.questionText }}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigate("Signup")}>
          <Text style={{ color: "#7F5AF0" }}> Sign up </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Email"
                placeholder="Type your Email"
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
        <View style={{ marginTop: 20 }}>
          <PrimaryButton onPress={() => {}}>Sign in</PrimaryButton>
        </View>
        <Text
          style={{
            ...styles.forgotPasswordText,
            textAlign: "center",
            marginVertical: 8,
          }}
        >
          Or
        </Text>
        <View style={{ marginBottom: 20 }}>
          <PrimaryButton onPress={() => {}} outlined icon={<GoogleIcon />}>
            Continue with Google
          </PrimaryButton>
        </View>
      </View>
    </AuthWrapper>
  );
};

export default LoginScreen;
