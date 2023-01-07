import {useState, useEffect} from 'react';

const useFetch = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

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
            setError(null); /* To remove previous error message (If exist) for subsequent requests.*/
        })
        .catch((err)=> {
            setIsPending(false); /*To remove loading message on getting an error*/
            setError(err.message)}); 
    },[]);

    return {blogs, isPending, error}; //to return state properties as js object

}

export default useFetch;