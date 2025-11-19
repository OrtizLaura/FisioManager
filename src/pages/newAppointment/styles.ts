// pages/newAppointment/styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1cebc",
  },
  boxTop: {
    height: height / 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b1cebc",
  },
  boxMid: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  logo: {
    width: 80,
    height: 80,
  },
  texto: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
    marginTop: 8,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  pickerWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    color: "#333",
  },
  dateInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    minHeight: 40,
  },
  buttonWrapper: {
    marginTop: 28,
    alignItems: "center",
  },
});