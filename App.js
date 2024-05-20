import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Mr YERLAO 2CW1 </Text>
       <Image
      source={{
        uri:"https://i.pinimg.com/236x/17/b1/01/17b1019474ef320fd863ca8b8226c977.jpg",
      }} 
      style={{width:300,height:200}}/>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
