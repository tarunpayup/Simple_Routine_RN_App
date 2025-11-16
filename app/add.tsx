import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddRoutine(){
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = () =>{
        Alert.alert("Saved","Title : ${title}\nTime : ${time}");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Routine Title</Text>
            <TextInput
                placeholder='e.g. Study'
                onChangeText={setTitle}
                value={title}
                 style={styles.input}
            />

            <Text>Routine Time</Text>
            <TextInput
                placeholder='e.g. 09:00 AM'
                onChangeText={setTime}
                value={time}
            />            

            <Button title="Save Routine" onPress={handleSubmit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    label:{
        marginTop:12,
        fontSize:18,
        fontWeight:"500"
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        padding:10,
        borderRadius:10,
        marginBottom:10
    }
});