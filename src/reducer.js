// reducer.js

import { ADD_POST, EDIT_POST, DELETE_POST, LIKE_POST} from './actions';

const initialState = {
  posts: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: Date.now(),
            title: action.payload.title,
            content: action.payload.content,
            like:0,
            dislike:0
          },
        ],
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              title: action.payload.title,
              content: action.payload.content,
            };
          }
          return post;
        }),
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              like: action.payload.like
            };
          }
          return post;
        }),
      };



    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default reducer;
