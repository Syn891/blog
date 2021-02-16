import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import BlogPostForm from '../Components/BlogPostForm'
import {Context} from '../context/BlogContext'

const EditScreen=({ navigation })=> { 
   const {state, editBlogPost} = useContext(Context)
   const id = navigation.getParam('id')
   const blogPost = state.find(blogPost => blogPost.id === id)
    
   return <BlogPostForm 
    initialValues={{title: blogPost.title, content: blogPost.content}}

    onSubmit={(title, content) => {
        editBlogPost(id, title, content, ()=> {
            navigation.pop()
        })
   }}/>

}

const styles = StyleSheet.create({})

export default EditScreen