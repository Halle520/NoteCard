import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {ItemCard} from '../card';

const styles = StyleSheet.create({
  container: {},
});

export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={[1, 2, 3]}
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
