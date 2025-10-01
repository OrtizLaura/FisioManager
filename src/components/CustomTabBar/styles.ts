import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    tabArea: {
        flexDirection:'row',
        height: 80,
        justifyContent:'space-around'
    },

    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    tabItemButton:{

        width: 70,
        height:70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.ligthGray,
        top: -30,
        zIndex:9999,
    }


});