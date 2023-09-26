import { ADD_ARTICLE } from "../Constants/action-type";

export  const addPost = newPost => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}