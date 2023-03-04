import { View, Text } from "react-native";
import React from "react";
import { welcomeStyles as styles } from "../../styles/auth/welcome";
import Background from "../../../assets/images/welcome_bg.svg";
import { useIcons } from "../../hooks/utility/useIcons";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import FadeInView from "../../components/organism/animations/FadeinView";
import { useWelcome } from "../../hooks/auth/useWelcome";

const WelcomeScreen = () => {
  const { AudiIcon } = useIcons();
  const { navigate } = useWelcome();

  return (
    <View style={styles.container}>
      <Background
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ position: "absolute" }}
      />

      <View style={styles.iconContainer}>
        <AudiIcon />
        <Text style={styles.iconText}>AudiBox</Text>
      </View>

      <FadeInView style={{}}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to AudiBox</Text>
          <Text style={styles.messageText}>
            AudioBox allowing you to listen to your favourite books anytime,
            anywhere
          </Text>
        </View>
      </FadeInView>
      <View style={styles.actionsContainer}>
        <PrimaryButton onPress={() => navigate("Signup")}>
          Get Started
        </PrimaryButton>
        <Text style={{ ...styles.messageText, fontSize: 12, marginBottom: 10 }}>
          Already have an account?
        </Text>
        <PrimaryButton onPress={() => navigate("Login")} outlined>
          Sign In
        </PrimaryButton>
      </View>
    </View>
  );
};

export default WelcomeScreen;
