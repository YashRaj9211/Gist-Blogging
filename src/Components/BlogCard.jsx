import "../Assets/style/BlogCard.css"

function BlogCard() {
    return (
        // Main blog card
        <div className="Blog-Card">
           
            <img src="https://plus.unsplash.com/premium_photo-1669386263238-3af768c65ae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Blog Image" className="Blog-Img" />
       
            {/* <WaveSVG />  */}
            <div className="post-card-content">
                <div className="Blog-Details">
                    <ul className="Tags">
                        <li>Mountains</li>
                        <li>Rivers</li>
                        <li>Tracking</li>
                    </ul>
                    <h2 className="Blog-Title">Try Canyoning In The Alps For A Life-Changing Experience!</h2>
                    <p>Gokyo Ri is situated in Nepal. The Gokyo Ri Trek in Nepal was once considered to be the best place for getting a view in the Everest ranges. Gokyo Ri (5483) is the perfect alternative...</p>
                </div>
                <hr />
                <div className="user-details">
                    <p>By</p>
                    <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" className="user-img" />
                    <p>Andrew Joseph</p>
                </div>
                <button className="read-more">Read More <i></i></button>
            </div>            
        </div>
        
    )
}

export default BlogCard;