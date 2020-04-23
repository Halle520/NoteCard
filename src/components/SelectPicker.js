import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';


const SelectPicker = () => {
    return (
        <RNPickerSelect
        style={{alignItems:'center'}}
        onValueChange={(value) => console.log(value)}
        items={[
          
          {label: 'English', value: 'en'},
          {label: 'Japan', value: 'jp'},
          {label: 'Viet Nam', value: 'vn'},
        ]} />
    )
}

export default SelectPicker
