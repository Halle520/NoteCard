import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Color} from '../constants/Color';

const W = Dimensions.get('window').width / 3;
const style = StyleSheet.create({
  cardContainer: {
    width: W,
    height: W,
    margin: 10,
    borderColor: Color.LIME,
    borderWidth: 1,
    padding: 10,
    borderRadius: W / 10,
    backgroundColor: Color.LIGHTYELLOW,
  },
  cardContent: {
    justifyContent: 'center',
  },
  cardText: {
    marginVertical: 3,
    textDecorationColor: Color.LIGHTYELLOW,
  },
});
export default ItemCard = ({word, on, kun, description}) => {
  return (
    <TouchableOpacity style={style.cardContainer}>
      <View style={style.cardContent}>
        <Text style={style.cardText}>Word: {word}</Text>
        <Text style={style.cardText}>On: {on}</Text>
        <Text style={style.cardText}>Kun: {kun}</Text>
        <Text style={style.cardText}>Description: {description}</Text>
      </View>
    </TouchableOpacity>
  );
};
