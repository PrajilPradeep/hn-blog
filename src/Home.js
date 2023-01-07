import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState(null);

    const handleDeleteBlog = (id)=>{
        const newBlogs =  blogs.filter(blog=> blog.id != id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log("useEffect hook is called !");
    },[]);

    

    return ( 
        <div className="home">
           <BlogList blogs = {blogs} title="All blogs!" handleDeleteBlog={handleDeleteBlog}/> 
        </div>   
     );
    }
    
export default Home;