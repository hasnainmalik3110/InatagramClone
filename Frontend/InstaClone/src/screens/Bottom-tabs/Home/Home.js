import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../../../components/header'
import { Colors } from '../../../themes/colors'


const Home=()=> {
    const theme=useSelector(state=>state.theme)
    const styles=createStyle(theme);
  return (
    <View style={styles.container}>
      <Header />
      
    </View>
  )
}
const createStyle=theme=>
    StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light
            }
    })
export default Home