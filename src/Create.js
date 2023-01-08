import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newBlog = {title, body, author};

        fetch('http://localhost:8000/blogs/',{
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(newBlog)
        })
        .then(()=>{console.log("New blog added.");});
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                type="text"
                required
                value = {title}
                onChange = {(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                required
                value = {body}
                onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>Blog Author: </label>
                <input type="text"
                required
                value = {author}
                onChange={(e)=>{setAuthor(e.target.value)}} />
                <button>Add Blog</button>
            </form>
        {/* <div>{title}</div>
        <div>{body}</div>
        <div>{author}</div> */}

        </div>
     );
}
 
export default Create
