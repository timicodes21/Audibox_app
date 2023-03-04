import React, { ReactNode } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Button } from "react-native-paper";

interface IProps {
  children: ReactNode;
  onPress: () => void;
  outlined?: boolean;
  icon?: ReactNode;
}

const PrimaryButton: React.FC<IProps> = ({
  children,
  onPress,
  outlined,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: outlined ? "rgba(0, 0, 0, 0.0)" : "#2CB67D",
        width: "100%",
        paddingVertical: 15,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2CB67D",
      }}
      onPress={onPress}
    >
      {icon && <View style={{ marginRight: 5 }}>{icon}</View>}
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
