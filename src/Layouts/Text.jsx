import BlogWrite from "../Components/BlogWrite";
import { useState } from "react";
import "../Assets/style/LayoutStyles/ImgTextStyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TextLayout(){
    const [isactive, setisactive] = useState(false);

    function handleHover() {
        console.log("is active...")
        setisactive(prevstate => !prevstate);
        console.log(isactive)
    }
    return (
        <div className="editor-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div
                className="editor-options-button"
                style={{
                    visibility: isactive ? "visible" : "hidden"
                }}
            >
                <FontAwesomeIcon icon={faPlus} size="2xl" color="white" />
            </div>
            <div className="editor-edit-container">
                <div className="text-zone">
                    <BlogWrite />
                </div>
            </div>
        </div>
    )
}

export default TextLayout;