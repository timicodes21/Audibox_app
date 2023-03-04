import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import AuthWrapper from "../../components/template/containers/AuthWrapper";
import { loginStyles as styles } from "../../styles/auth/login";
import { useForm, Controller } from "react-hook-form";
import { VerificationFormValues } from "../../types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "../../components/atoms/formFields/AuthInput";
import InputErrorText from "../../components/atoms/texts/InputErrorText";
import { TextInput } from "react-native-paper";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import { usePasswordShow } from "../../hooks/utility/usePasswordShow";
import { useSignup } from "../../hooks/auth/useSignup";

const VerirficationScreen = () => {
  const { schema, navigate } = useSignup();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationFormValues>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const { visible, toggleShow } = usePasswordShow();

  return (
    <AuthWrapper>
      <Text style={styles.headerText}>Verification</Text>
      <View style={styles.questionContainer}>
        <Text style={{ ...styles.questionText }}>
          To verify your email address, we’ve sent a code to{" "}
          <Text style={{ color: "#7F5AF0" }}>heba@gmail.com. </Text>
        </Text>
      </View>
      <View style={styles.formContainer}>
        <>
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label=""
                placeholder="Type or paste code here"
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
          {errors?.code && (
            <InputErrorText text={errors?.code?.message ?? ""} />
          )}
        </>

        <View style={{ marginTop: 25, marginBottom: 15 }}>
          <PrimaryButton onPress={() => {}}>Create Account</PrimaryButton>
        </View>

        <TouchableHighlight underlayColor="#F0F0F0">
          <Text style={{ ...styles.forgotPasswordText, textAlign: "left" }}>
            By creating an account, you agree to the AudiBox’s terms and
            conditions.
          </Text>
        </TouchableHighlight>
        <TouchableOpacity style={{ marginVertical: 30 }}>
          <Text style={styles.linkText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </AuthWrapper>
  );
};

export default VerirficationScreen;
