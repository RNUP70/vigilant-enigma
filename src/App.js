import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, deletePost, editPost,likePost } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editing, setEditing] = useState(false);
  const [postId, setPostId] = useState(null);
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  const handleAddPost = () => {
    if (editing) {
      dispatch(editPost(postId, title, content));
      setEditing(false);
      setPostId(null);
    } else {
      dispatch(addPost(title, content));
    }
    setTitle('');
    setContent('');
  }

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  }

  const handleEditPost = (id, title, content) => {
    setTitle(title);
    setContent(content);
    setEditing(true);
    setPostId(id);
  }

  const handleLikePost = (id,like) =>{
   dispatch(likePost(id,like+1))
  }
 

  return (
    <div className="App">
      <h1>My Blog</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        />
        <button type="button" onClick={handleAddPost}>
          {editing ? 'Save Post' : 'Add Post'}
        </button>
      </form>
      {posts.length > 0 && (
        <div>
          {posts.map(post => (
            (post.title.length>0 && post.content.length>0) &&
           ( <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button type="button" onClick={() => handleDeletePost(post.id)}>Delete</button>
              <button type="button" onClick={() => handleEditPost(post.id, post.title, post.content)}>Edit</button>
              <button type = "button" onClick = {() => handleLikePost(post.id,post.like)}>Like</button>
              {post.like > 0  && <span>{post.like}</span>}
            </div>)
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
