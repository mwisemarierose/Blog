import { Link } from "react-router-dom";
import { useState } from "react";

const BlogList = ({ blogs }) => {
  const [like ,setLike] = useState();
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to ={`/blog/${blog.id}`}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          </Link>
          <button onClick={() => setLike((prevLike) => !prevLike)}>Like :{like ? "❤" : ""}</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;