import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  tabArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 24,
    height: 64,
    backgroundColor: "#0000",
  },

  tabItem: {
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },

  tabCenter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.ligthGray,
    top: -30,
    zIndex: 9999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  tabItemButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.ligthGray,
    top: -30,
    zIndex: 9999,
  },
});