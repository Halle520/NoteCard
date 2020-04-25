import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'

const style = StyleSheet.create({
    lineInput:{
        flexDirection: 'row',
        margin:10,
    },
    label:{
        flex:2,
        textAlign:'center'
    },
    fieldInput:{
        flex:5,
        borderBottomColor:'black',
        borderBottomWidth: 0.5
    }
})
const FormEdit = () => {
    return (
        <ScrollView contentContainerStyle={{justifyContent:'space-around', alignItems:'center', flex:1}}>
            <View style={style.lineInput}>
                <Text style={style.label}>Word: </Text>
                <TextInput style={style.fieldInput}/>
            </View>
            <View style={style.lineInput}>
                <Text style={style.label}>On: </Text>
                <TextInput style={style.fieldInput}/>
            </View>
            <View style={style.lineInput}>
                <Text style={style.label}>Kun: </Text>
                <TextInput style={style.fieldInput}/>
            </View>
            <View style={style.lineInput}>
                <Text style={style.label}>Description: </Text>
                <TextInput style={style.fieldInput}/>
            </View>
            <View style={style.lineInput}>
                <Text style={style.label}>Meaning: </Text>
                <TextInput style={style.fieldInput}/>
            </View>
            
        </ScrollView>
    )
}

export default FormEdit
