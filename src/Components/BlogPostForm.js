import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native'


const BlogPostForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return <View>
        <Text style={styles.label}> Enter Title </Text>
        <TextInput style={styles.title} value={title} onChangeText={(text => setTitle(text))}/>
        <Text style={styles.label}> Enter Content </Text>
        <TextInput 
            style={styles.content} 
            value={content}
            multiline={true}
            onChangeText={(text => setContent(text))}/>
        <Button title="Save Blog Post" onPress={() => onSubmit(title, content)}/>
    </View>

}

BlogPostForm.defaultProps = { 
    initialValues: {
        title: '',
        content: ''
}}

const styles = StyleSheet.create({

    title: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },

    content: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        height: 500,
        justifyContent:  'space-evenly'
    },

    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        marginTop: 5
    }
})

export default BlogPostForm