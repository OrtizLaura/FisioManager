import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: Dimensions.get("window").height / 6,
    backgroundColor: "#b1cebc",
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  greeting: {
    fontSize: 20,
    color: "#fff",
    marginTop: 20,
  },

  boxInput: {
    width: "80%",
  },

  boxInputSearch: {
    width: 200,
  },

  boxList: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  card: {
    width: "100%",
  height: 60,
  backgroundColor: "#fff",
  marginTop: 6,
  borderRadius: 10,
  justifyContent: "center",
  margin: 10,
  borderWidth: 2,
  borderColor: "gray", 
  paddingHorizontal: 16,
  paddingVertical: 10,
  },

  ball: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  rowCardLeft: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  descriptionCard: {
    color: themes.colors.primary,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    padding: 24,
  },
  newPatientButton: {
    backgroundColor: themes.colors.primary,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  newPatientButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
