import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, TextInput, Alert, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Color} from '../constants/Color';

const W = Dimensions.get('window').width / 3;
const style = StyleSheet.create({
  searchContainer: {
      flexDirection: 'row',
      marginBottom: 200
  },
  picker:{
    flex:2,
  },
  searchBox: {
      flex:7,
    borderBottomWidth: 0.2,
    backgroundColor: Color.WHITE,
    height: 30,
    borderRadius: 15,
    paddingHorizontal:10,
  },
});
export default function SearchInput() {
  const [languages, setLanguages] = useState('jp');
  const [pickerVisible, setPickerVisible] = useState(false)
//   Alert.alert('rendered')
  return (
    <View style={style.searchContainer}>
    <Text onPress={()=>{setPickerVisible(true)}}>{languages}</Text>
      <Picker
        style={style.picker}
        
        selectedValue={languages}
        onValueChange={(itemValue, itemIndex) =>
          setLanguages(itemValue)
        }>
        <Picker.Item label="Viet Nam" value="vn" />
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Japanese" value="jp" />
        <Picker.Item label="Korean" value="kr" />
      </Picker>
      <TextInput style={style.searchBox} />
    </View>
  );
}
