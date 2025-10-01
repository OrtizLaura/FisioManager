import { Button, StyleSheet } from "react-native";
import { themes } from "../../global/themes";



export const styles = StyleSheet.create ({
      boxInput: {
            width: '100%',
            height: '20%',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 5,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor: themes.colors.secundary,
            paddingHorizontal: 30,
    
    
        },

         input:{
        height: '100%',
        width:'100%',
        borderRadius: 40,
        alignItems:'center',
        paddingLeft: 5,

    },

    titleInput:{
        marginLeft: 5,
        color:themes.colors.gray,
        marginTop: 20,

    },

    Icon:{
        width:'100%',
    },
    button:{
        width:'10%',

    }
})


