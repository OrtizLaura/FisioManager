// pages/schedule/styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1cebc",
  },

  header: {
    height: height / 6,
    backgroundColor: "#b1cebc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  arrowButton: {
    padding: 8,
  },

  dateWrapper: {
    alignItems: "center",
  },

  dateLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  dateValue: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
  },

  listWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 12,
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

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },

  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  cardSubtitle: {
    marginTop: 2,
    fontSize: 14,
    color: themes.colors.primary,
  },

  footer: {
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },

  newSessionButton: {
    width: "100%",
    height: 48,
    borderRadius: 24,
    backgroundColor: themes.colors.secundary,
    alignItems: "center",
    justifyContent: "center",
  },

  newSessionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});