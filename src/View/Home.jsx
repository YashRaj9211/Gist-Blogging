import BlogPostsContainer from "../Components/BloggPostsContainer";
import { useEffect } from "react";
function Home() {

    // useEffect(() => {
    //     var my_awesome_script = document.createElement('script');
    //     my_awesome_script.setAttribute('src', './p5/p5.js');
    //     document.body.appendChild(my_awesome_script);

    //     return()=>{
    //         my_awesome_script.parentNode.removeChild(my_awesome_script);
    //     }
    // },[]);
    return (
        <div>
            <div className='welcome' id="home">
                <p>Welcome To the World of Joy!</p>
            </div>
            <BlogPostsContainer />
        </div>
    )
}

export default Home;