import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletPost(id) {
    const updatePosts = posts.filter((post) => post.id !== id);
    setPosts(updatePosts);
  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) =>
        <Post key={post.id} id={post.id} title={post.title} deletePost={deletPost} />
      )}
    </div>
  );
}

export default App;
