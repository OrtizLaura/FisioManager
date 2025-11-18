import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1cebc",
    paddingHorizontal: 32,
    paddingTop: 16,
  },

  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 6,
    fontWeight: "500",
  },

  pickerWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 18,
  },

  picker: {
    color: "#333",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#333",
    marginBottom: 18,
  },

  timeItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  timeItemSelected: {
    backgroundColor: themes.colors.primary,
    borderColor: themes.colors.primary,
  },

  timeItemText: {
    fontSize: 14,
    color: "#333",
  },

  timeItemTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttonWrapper: {
    marginTop: 28,
    alignItems: "center",
  },
});