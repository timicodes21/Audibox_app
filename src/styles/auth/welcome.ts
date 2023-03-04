import { StyleSheet } from "react-native";

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },

  iconContainer: {
    alignItems: "center",
    zIndex: 999,
  },
  iconText: {
    fontSize: 28,
    fontWeight: "400",
    fontFamily: "Bahnschrift",
    color: "#FFF",
  },
  welcomeContainer: {
    marginTop: 90,
    alignItems: "center",
    marginHorizontal: 25,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Bahnschrift",
    color: "#FFFFFE",
  },
  messageText: {
    color: "#E8E8E5",
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Bahnschrift",
    textAlign: "center",
    marginTop: 12,
  },
  actionsContainer: {
    marginTop: 90,
    alignItems: "center",
    marginHorizontal: 25,
  },
});
