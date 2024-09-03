import React, { useEffect, useState } from "react";
import classes from "./Updates.module.css";

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error receiving data:", error);
  }
}

export default function Updates() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await fetchData();
      if (data) {
        setPost(data);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className={classes.updates}>
      <h2>Обновления</h2>
      <ul className={classes["updates-content"]}>
        {posts.length == 0 ? (
          <p>Нет данных</p>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
