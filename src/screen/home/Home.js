import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {ItemCard} from '../../components';
import {SearchInput} from '../../components/';
import API from '../../constants/API';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  },
});

export default Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const card = useSelector(state=> state.cards.cardList)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(API.getData)
      .then((response) => response.json())
      .then((json) => dispatch({type:'SETLIST',cards:json}))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));

    return () => {};
  });
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <SearchInput />
      <FlatList
        horizontal
        data={card}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
            <ItemCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};
