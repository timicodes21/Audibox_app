import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16161A",
    paddingHorizontal: 30,
  },
  whiteWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
  },
  logoContainer: {
    marginTop: 80,
    alignSelf: "center",
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Bahnschrift",
    color: "#16161A",
    textAlign: "center",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Bahnschrift",
    color: "#FFFFFE",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  questionText: {
    color: "#444242",
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Bahnschrift",
    textAlign: "center",
  },
  formContainer: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#72757E",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Bahnschrift",
    textAlign: "right",
  },
  linkText: {
    color: "#7F5AF0",
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Bahnschrift",
    textAlign: "center",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
