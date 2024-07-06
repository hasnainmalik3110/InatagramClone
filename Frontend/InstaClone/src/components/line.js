import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../themes/colors';


const Line=()=> {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.line,
    height: 1,
    flex: 1,
    },
})

export default Line