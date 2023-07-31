import { useState } from "react";
import "../Assets/style/LayoutStyles/ImgStyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ImgLayout() {
    const [isactive, setisactive] = useState(false);

    function handleHover() {
        console.log("is active...")
        setisactive(prevstate => !prevstate);
        console.log(isactive)
    }
    return (
        <div className="img-layout" onMouseEnter={handleHover} onMouseLeave={handleHover}>

            <div
                className="editor-options-button"
                style={{
                    visibility: isactive? "visible": "hidden"
                }}
            >
                <FontAwesomeIcon icon={faPlus} size="2xl" color="white" />
            </div>
            <img
                // style={{
                //     objectFit: isactive ? "cover" : "contain",
                // }}
                src="https://images.unsplash.com/photo-1682687981603-ae874bf432f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt=""
            />
        </div>
    )
}

export default ImgLayout;
