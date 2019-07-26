import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [posts, setPosts] = useState([]);

  //const [items, setItems] = useState([]);

 const fetchItems = async () => {
   const data = await fetch('https://jsonplaceholder.typicode.com/posts');
   
   const posts = await data.json();
   console.log(posts);
   setPosts(posts);
  }

    return (
   <div>
     {posts.map(post => (
       <h1 key={post.postid}>
       {[post.title]}
       </h1>
       ))}
  </div>
  );
}

export default Shop;