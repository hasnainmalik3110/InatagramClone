import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../themes/colors'
import { Fonts } from '../themes/fonts'


const Custom_btn = ({ title, ONPress, style, disabled}) => {
  return (
    <View style={[styles.btn,style]}>
      <TouchableOpacity style={[styles.container]}
      onPress={ONPress}
      disabled={disabled}
      >
      
      <Text style={styles.txt}>{title}</Text>

      </TouchableOpacity>
      
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
        
        
    },
    btn:{
        backgroundColor:Colors.btn_clr,
        alignSelf:'center',
        borderRadius:10,
        width:'90%',
        height:58,
        marginVertical:20,
        
        
        
    },
    txt:{
        color:Colors.bg_light,
        fontSize:20,
        fontFamily:Fonts.SF_Bold,
        fontWeight:'bold'
        
    },
    
})

export default Custom_btn