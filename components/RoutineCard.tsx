import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function RoutineCard({item, onPress}){
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        marginVertical:10,
        elevation:3
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000'
    },
    time:{
        fontSize:14,
        fontWeight:'400',
        color:'#888'
    }
});