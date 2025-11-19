import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1cebc",
  },

  boxTop: {
    height: height / 3.5,
    width: "100%",
    backgroundColor: "#b1cebc",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 32,
  },

  boxMid: {
    flex: 1,
    width: "100%",
    backgroundColor: "#b1cebc",
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  boxBotton: {
    height: height / 6,
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

  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    padding: 8,
  },

  listContent: {
    paddingBottom: 24,
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    width: "100%",
  },

  deleteButton: {
    padding: 8,
  },
  userIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: themes.colors.secundary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },

  userEmailRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  userEmail: {
    marginLeft: 4,
    fontSize: 14,
    color: "#555",
  },

  emptyWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },

  textButtonCreate: {
    fontSize: 12,
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
  },
  userCardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
