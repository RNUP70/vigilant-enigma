// actions.js

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const LIKE_POST = 'LIKE_POST';


export function addPost(title, content) {
  return {
    type: ADD_POST,
    payload: {
      title,
      content,
    },
  };
}

export function editPost(id, title, content) {
  return {
    type: EDIT_POST,
    payload: {
      id,
      title,
      content,
    },
  };
}
export function likePost(id,like)
{
  return {
  type: LIKE_POST,
  payload: {
    id,
    like
  }
};
}




export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: {
      id,
    },
  };
}
