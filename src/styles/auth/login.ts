import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#16161A",
    paddingHorizontal: 30,
  },
  whiteWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
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
});
