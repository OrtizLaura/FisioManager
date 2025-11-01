import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
tabArea: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', 
  paddingHorizontal: 24,
  height: 64,                      
  backgroundColor: '#0000',        
},

tabItem: {
  width: 64,                       
  alignItems: 'center',
  justifyContent: 'center',
},

tabCenter: {
  flex: 1,                         
  alignItems: 'center',            
  justifyContent: 'center',
},

tabItemButton:{

        width: 70,
        height:70,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.ligthGray,
        top: -30,
        zIndex:9999,
    }


});