import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class DetailCard extends Component {
  render() {
    const {route} = this.props;
    const {card} = route.params;
    return (
      <View>
        <Text> {card.id} </Text>
        <Text> {card.word} </Text>
        <Text> {card.on} </Text>
        <Text> {card.kun} </Text>
        <Text> {card.description} </Text>
        <Image style= {{width:200, height:200}} source={{uri: card.image}} />
        <Text> Save: {card.isSaved ? 'true' : 'false'} </Text>
      </View>
    );
  }
}
