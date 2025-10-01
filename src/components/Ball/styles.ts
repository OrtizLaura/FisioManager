import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    Button: {
        width: 240,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.secundary,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 0.29,
        shadowOpacity: 0.465,  
        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
         justifyContent: 'center',
    },
    textButtonCreate:{
        fontSize: 12,
        color: 'gray',
        justifyContent: 'center',

    }
});