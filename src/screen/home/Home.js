import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {ItemCard} from '../../components';
import {SearchInput} from '../../components/';

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
});

export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SearchInput />
      <FlatList
        horizontal
        data={[1, 2, 3,4,5,6]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ItemCard />}
      />
      <Button
        onPress={() => {
          navigation.navigate('Details');
        }}
        title="go to detail"
      />
    </View>
  );
};
