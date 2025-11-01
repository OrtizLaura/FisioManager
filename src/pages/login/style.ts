import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    backgroundColor: "#b1cebc",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    backgroundColor: "#b1cebc",
    paddingHorizontal: 37,
  },
  boxBotton: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    backgroundColor: "#b1cebc",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  texto: {
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
    fontSize: 18,
  },
  Button: {
    width: 240,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.secundary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 0.29,
    shadowOpacity: 0.465,
    elevation: 7,
  },
  textButton: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
    marginTop: 20,
  },
  textButon: {
    fontSize: 16,
    color: themes.colors.primary,
  },
  textButtonCreate: {
    fontSize: 12,
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
  },
});
