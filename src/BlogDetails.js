import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;