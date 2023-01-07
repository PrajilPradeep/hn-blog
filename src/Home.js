import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then((res) => {
            if(!res.ok){
                throw Error("Failed to fetch data for the resource");
            }
            // console.log(res);
            return res.json();
        })
        .then ((data)=>{
            // console.log(data);
            setBlogs(data);
            setIsPending(false);
        })
        .catch((err)=>console.log(err.message));
        
    },[]);

    

    return ( 
        <div className="home">
            { isPending && <div className="loading">Loading...!</div> }
            { blogs && <BlogList blogs = {blogs} title="All blogs!" />}
        </div>   
     );
    }
    
export default Home;