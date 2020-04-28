import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {Color} from '../constants/Color';
import {useDispatch, useSelector} from 'react-redux';
import {saveCardAction} from '../actions/card';

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
    height: W - 50,
  },
  cardText: {
    textDecorationColor: Color.LIGHTYELLOW,
  },
  btnSave: {
    left: 90,
    top: 10,
    backgroundColor: 'red',
    opacity: 0.5,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});

export default ItemCard = ({item, navigation}) => {
  const dispatch = useDispatch();
  const onSaveItem = (itemId) => {
    dispatch(saveCardAction(itemId));
  };
  return (
    <TouchableOpacity
      style={style.cardContainer}
      onPress={() =>
        navigation.navigate('Details', {
          card: item,
        })
      }>
      <View style={style.cardContent}>
        <Text style={style.cardText}>Word: {item.card}</Text>
        <Text style={style.cardText}>On: {item.on}</Text>
        <Text style={style.cardText}>Kun: {item.kun}</Text>
      </View>
      <View style={style.btnSave}>
        <Button
          title="+"
          onPress={() => {
            onSaveItem(item.id);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
