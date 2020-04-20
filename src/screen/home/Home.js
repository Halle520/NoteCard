import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {ItemCard} from '../../components';
import {SearchInput} from '../../components/';
import {CARDS} from '../../models/fakeData';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <FlatList
        horizontal
        data={CARDS}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
          <ItemCard
            item ={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};
