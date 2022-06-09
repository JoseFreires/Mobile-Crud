import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function AppList() {

  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <Image 
      style={{width: 230, height: 170}} 
      source={require('./assets/studio.png')}
      />
      <Text style={{
        color: '#fff', 
        fontSize: 30, 
        letterSpacing: 5,
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        fontFamily: 'Cooper',
        fontWeight: 'bold'
      }}>
        スタジオジブリ
      </Text>
      <Text style={styles.title}>Studio Ghibli</Text>
      <Text style={styles.info}>
        Studio Ghibli Inc. é estúdio de cinema de animação japonês com sede em Koganei, Tóquio. 
        O estúdio é mais conhecido por seus filmes de animação e também produziu vários curtas, 
        comerciais de televisão e um filme de televisão
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#439BE5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    letterSpacing: 5,
    marginBottom: 20,
  },
  info : {
    textAlign:'center',
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: 'rgb(0,0,0)',
    width: 320
  },

});