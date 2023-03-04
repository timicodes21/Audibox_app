import { View, Text, TextInputFocusEventData } from "react-native";
import React, { ReactNode } from "react";
import { TextInput } from "react-native-paper";
import { NativeSyntheticEvent } from "react-native";

interface IProps {
  label: string;
  placeholder?: string;
  onChange: (((text: string) => void) & Function) | undefined;
  value?: string;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  maxLength?: number | undefined;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  keyboardType?: "numeric";
  secureTextEntry?: boolean;
}

const AuthInput: React.FC<IProps> = ({
  label,
  placeholder,
  onChange,
  value,
  onBlur,
  maxLength,
  rightIcon,
  leftIcon,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          color: "#16161A",
          fontSize: 12,
          fontWeight: "400",
          fontFamily: "Bahnschrift",
        }}
      >
        {label}
      </Text>
      <TextInput
        label={placeholder}
        value={value}
        onChangeText={onChange}
        style={{
          backgroundColor: "#FFF",
          fontSize: 12,
          fontWeight: "400",
          color: "#878A93",
          paddingLeft: 0,
          width: "100%",
        }}
        contentStyle={{ margin: 0 }}
        maxLength={maxLength}
        onBlur={onBlur}
        right={rightIcon}
        left={leftIcon}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default AuthInput;
