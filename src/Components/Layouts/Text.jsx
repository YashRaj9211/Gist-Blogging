import "../LayoutStyles/ImgTextLayout.css"
import BlogWrite from "../BlogWrite";
function TextLayout(){
    return(
        <div className="img-text-layout">
            {/* <img src="https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg" alt="" /> */}
            <div className="text-zone">
                <BlogWrite className="text" />
            </div>
        </div>
    )
}

export default TextLayout;