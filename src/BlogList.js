const BlogList = ({blogs,title, handleDeleteBlog}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title}</h2>
                    <p>Written by: { blog.author }</p>
                    <button className="deleteBlog" onClick={()=>handleDeleteBlog(blog.id)}>Delete Blog</button>
                </div>
            ))}
    </div> );
}
 
export default BlogList;