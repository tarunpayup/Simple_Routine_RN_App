import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import {View,Text,FlatList,StyleSheet,Button} from 'react-native';
import RoutineCard from '@/components/RoutineCard';

export default function Home(){
    const router = useRouter();
    const [routine,setRoutine] = useState(
        [
            {id:"1", title:"Wake", time:"06:00 AM"},
            {id:"2", title:"Exercise", time:"06:30 AM"},
            {id:"3", title:"Breakfast", time:"08:00 AM"}
        ]
);

return(
    <View style={styles.container}> 
        <Button title="Add new routine" onPress={() => router.push("/add")}/>
        <FlatList
            data = {routine}
            keyExtractor={(item) => item.id}
            style={{marginTop:20}}
            renderItem={
                ({item}) => (
                    <RoutineCard
                        item = {item}
                        onPress={()=> router.push('/routine/${item.id}?title=${item.title}&time=${item.time}')}
                    />
                )
            }
        />
    </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#e6e7e8ff"
    }
});