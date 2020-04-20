import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
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
    justifyContent: 'space-between',
    height: W - 20,
    overflow: 'hidden',
  },
  cardText: {
    textDecorationColor: Color.LIGHTYELLOW,
  },
});

export default ItemCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={style.cardContainer}
      onPress={() =>
        navigation.navigate( 'Details',{
          card: item
        })
      }>
      <View style={style.cardContent}>
        <Text style={style.cardText}>Word: {item.word}</Text>
        <Text style={style.cardText}>On: {item.on}</Text>
        <Text style={style.cardText}>Kun: {item.kun}</Text>
      </View>
    </TouchableOpacity>
  );
};
