import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'


    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor: '#b1cebc',
        alignItems: 'center',
        justifyContent: 'center',


    },
    boxMid:{
        height: Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor: '#b1cebc',
        paddingHorizontal: 37,



    },
    boxBotton:{
        height: Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor: '#b1cebc',
        alignItems: 'center',
        justifyContent: 'center',



    },

    logo:{
        width:80,
        height: 80,
    },

    texto:{
        fontWeight:'bold',
        marginTop: 20,
        color:'#fff',
        fontSize: 18,
    },

    titleInput:{
        marginLeft: 5,
        color:themes.colors.gray,
        marginTop: 20,

    },

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

    botton:{
        width: 240,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.secundary,
        borderRadius: 40,
        shadowColor:'#000',
        shadowOffset: { width:0 , height:12},
        shadowRadius: 16.00,
        shadowOpacity: 0.58,
        elevation: 24,

    },

    textBotton:{
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',


    },

    textButon:{
        fontSize: 16,
        color:themes.colors.primary,
        

    },

    



})














export const style = StyleSheetList