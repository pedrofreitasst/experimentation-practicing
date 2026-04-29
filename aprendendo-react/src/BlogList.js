import {Link} from "react-router-dom";
const Bloglist = ( {blogs, title, handleDelete}/*prop*/) => {
    // const blogs = prop.blogs;
    // const title = prop.title;
    //console.log(prop,blogs);
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                   </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;