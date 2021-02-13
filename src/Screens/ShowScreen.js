import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'; 


const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return <View style={styles.postStyle}>
        <Text style={styles.titleStyle}> {blogPost.title}</Text>
        <Text style={styles.contentStyle}> {blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
              <EvilIcons name="pencil" style={styles.navPlusStyle} />
            </TouchableOpacity>
          ),}
}

const styles = StyleSheet.create({

    postStyle: {

        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        margin: 10,
        height: 600

    },

    titleStyle: {

        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 5,
        textDecorationLine: 'underline',
        textDecorationColor: 'grey',
    },

    contentStyle: {

        fontSize: 16,
        marginVertical: 15,
        color: 'grey'
    },

    navPlusStyle : {

        fontSize: 35
    }
})

export default ShowScreen