import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
  boxInput: {
    width: "100%",
    height: 50, 
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themes.colors.secundary,
    paddingHorizontal: 16, 
  },

  input: {
    flex: 1,        
    height: "100%", 
    borderRadius: 40,
    paddingLeft: 5,
    color: themes.colors.gray, 
    fontSize: 16,
  },

  titleInput: {
    marginLeft: 5,
    color: themes.colors.gray,
    marginTop: 20,
  },

  Icon: {
    marginRight: 8, 
  },

  button: {
    marginLeft: 8, 
  },
});