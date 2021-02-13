import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
import { Octicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



const IndexScreen=({navigation})=> {

    const {state, deleteBlogPost} = useContext(Context);

   return ( <View>
       <FlatList 
            data={state}
            keyExtractor={(blogPosts)=>blogPosts.title}
            renderItem={({item}) => {
                return <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})}>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Octicons style={styles.icon} name="trashcan" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
    }}/></View> )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" style={styles.navPlusStyle} />
            </TouchableOpacity>
          ),}
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18
    
    },

    icon: {
        fontSize: 24
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 5
    },

    navPlusStyle: {
        fontSize: 30, 
        marginRight: 10
    }
})

export default IndexScreen;