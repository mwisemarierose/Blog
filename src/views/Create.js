import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState('');
  const [image ,setImage] = useState(null)
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Rose');
  const [isPending,setIsPending] = useState(false)
  const navigate = useNavigate()

// console.log(image);
// console.log(title);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    const formData = new FormData()
    formData.append('image', image)

 fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formData,title,body,author
      })
    }).then(() => {
      console.log('new blog added');
      setIsPending(false)
      navigate("/")
    })

   }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog image:</label>
        <input 
          type="file"
          id="file" 
          required 
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label>Blog body:</label>
        <textarea
          required
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Rose">Rose </option>
          <option value="Pink">Pink</option>
        </select>
        {!isPending&&<button>Add Blog</button>}
        {isPending&&<button disabled>Adding new Blog ....</button>}

      </form>
    </div>
  );
}
 
export default Create;