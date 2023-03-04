import React, { ReactNode } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";

interface IProps {
  children: ReactNode;
  onPress: () => void;
  outlined?: boolean;
}

const PrimaryButton: React.FC<IProps> = ({ children, onPress, outlined }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: outlined ? "rgba(0, 0, 0, 0.0)" : "#2CB67D",
        width: "100%",
        paddingVertical: 15,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2CB67D",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: outlined ? "#2CB67D" : "#FFFFFE",
          fontFamily: "Bahnschrift",
          fontWeight: "400",
          fontSize: 15,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
