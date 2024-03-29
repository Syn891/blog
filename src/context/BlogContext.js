import createDataContext from './createDataContext'
import jsonserver from '../api/jsonserver'

const blogReducer = (state, action) => {

    switch (action.type) {
        case 'get_blogposts': 
            return action.payload
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content}]
        case 'delete_blogpost':
            return state.filter((blogPost)=> blogPost.id !=action.payload )
        default:
            return state;

    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonserver.get('/blogposts');

        dispatch ({ type: 'get_blogposts', payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
   return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: {title, content}})
    callback();
   }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
     dispatch({ type: 'delete_blogpost', payload: id})
    }
 }
 


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, getBlogPosts }, [])