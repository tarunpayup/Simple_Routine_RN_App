import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function RoutineDetails(){
    const {id, title, time} = useLocalSearchParams();
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Routine ID : {id}</Text>
            <Text style={styles.text}>Title : {title}</Text>
            <Text style={styles.text}>Time : {time}</Text>

            <Button title="Go Back" onPress={() => router.back()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    heading:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:10
    },
    text:{
        fontSize:18,
        marginBottom:5
    }
});