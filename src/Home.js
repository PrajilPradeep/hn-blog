import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    return ( 
        <div className="home">
            { error && <div className="errorMessage">{error}</div> }
            { isPending && <div className="loading">Loading...!</div> }
            { blogs && <BlogList blogs = {blogs} title="All blogs!" />}
        </div>   
     );
    }
    
export default Home;