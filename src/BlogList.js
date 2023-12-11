
const BlogList = ({blogs,titlele,handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{titlele}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;