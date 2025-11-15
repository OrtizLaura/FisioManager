import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1cebc",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: themes.colors.primary,
  },
  arrowButton: {
    padding: 8,
  },
  monthTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  daysList: {
    padding: 16,
  },
  dayCard: {
    flex: 1,
    margin: 6,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dayCardAvailable: {
    backgroundColor: "#d1f5d3",
    borderWidth: 1,
    borderColor: themes.colors.primary,
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  dayLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#555",
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#f7f7f7",
  },
  footerTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  footerEmpty: {
    color: "#777",
    fontSize: 13,
  },
  footerDate: {
    fontSize: 13,
    color: "#333",
  },
});