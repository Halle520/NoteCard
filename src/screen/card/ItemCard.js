import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';

const W = Dimensions.get('window').width/3
const style = StyleSheet.create({
  cardContainer: {
    width: W,
    height: W,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  cardContent:{
    justifyContent: 'center'
  },
  cardText: {
      marginVertical: 3
  }
});
export const ItemCard = ({word,on,kun,description}) => {
  return (
    <View style={style.cardContainer}>
      <TouchableOpacity style={style.cardContent}>
          <Text style={style.cardText}>Word: {word}</Text>
          <Text style={style.cardText}>On: {on}</Text>
          <Text style={style.cardText}>Kun: {kun}</Text>
          <Text style={style.cardText}>Description: {description}</Text>
      </TouchableOpacity>
    </View>
  );
};
