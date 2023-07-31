import "../Assets/style/BlogPostsCont.css"
import BlogCard from "./BlogCard"

export default function BlogPostsContainer(){
    return(
        <div className="blog-post-container">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    )
}