/* eslint-disable react-native/no-inline-styles */
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
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setListCardAction} from '../../actions/card';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const card = useSelector((state) => state.cards.cardList);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(API.getData)
      .then((response) => response.json())
      .then((json) => dispatch(setListCardAction(json)))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));

    return () => {};
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
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
      )}
    </SafeAreaView>
  );
};
