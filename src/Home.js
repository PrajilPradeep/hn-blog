import { useState } from "react";

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:"first react app",body:"This is my first react app. This is just a blog post where I write things which are likely to happen in the future for sure.",author:"Praji",id:1},
        {title:"sharing it with friends",body:"I have now just shared it with you. If you reading this do know that you are one of the dumb friends I have",author:"Prajil Luther",id:2},
        {title:"learning more",body:"My next plan is to learn more about React and other front end technologies. Whish me luck :p",author:"Prajil Luther King",id:3},
        {title:"becoming the ceo of Google",body:"I think this is self explanatory. I must save google.",author:"Prajil Luther King II",id:4}
    ]);
    
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title}</h2>
                <p>Written by: { blog.author }</p>
                </div>
            ))}  
        </div>   
     );
    }
    
export default Home;