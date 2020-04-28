import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'center',
  },
});
export default class DetailCard extends Component {
  render() {
    const {route, navigation} = this.props;
    const {card} = route.params;
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate('Edit Card');
          }}
          title="Edit"
        />
      ),
      headerBackTitle: 'Back',
    });
    return (
      <View style={style.cardContainer}>
        <Text> {card.id} </Text>
        <Text> {card.word} </Text>
        <Text> {card.on} </Text>
        <Text> {card.kun} </Text>
        <Text> {card.description} </Text>

        <Image style={{width: 200, height: 200}} source={{uri: card.image}} />
        <Text> Save: {card.isSaved ? 'true' : 'false'} </Text>
      </View>
    );
  }
}
