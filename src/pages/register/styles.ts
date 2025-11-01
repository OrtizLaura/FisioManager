import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
  container: {},
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
    marginTop: 2,
    color: "#fff",
    fontSize: 18,
  },
  subtitulo: {
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
    elevation: 2,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 16,
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

  buttonWrapper: {
    marginTop: 24,
    alignItems: "center",
  },
});
