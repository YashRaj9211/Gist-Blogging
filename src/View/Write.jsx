import React, { useState } from "react";

import ImgLayout from "../Layouts/Img";
import ImgTextLayout from "../Layouts/ImgText"
import TextLayout from "../Layouts/Text"
import TextImgLayout from "../Layouts/TextImg"

import "../Assets/style/Write.css";

function WriteBlog() {
    const [draggedItem, setDraggedItem] = useState(null);
    const [componentOrder, setComponentOrder] = useState([]);

    function addCode(componentName) {
        console.log("Add Code Running..."+componentName)
        setComponentOrder((prevOrder) => [...prevOrder, componentName]);
    }

    function renderComponents() {
        console.log("Render Component Running...")
        return componentOrder.map((componentName, index) => {
            switch (componentName) {
                case 'Image':
                    return <ImgLayout key={index} />;
                case 'Image-Text':
                    return <ImgTextLayout key={index} />;
                case 'Text-Image':
                    return <TextImgLayout key={index} />;
                case 'Text':
                    return <TextLayout key={index} />;
                // Add cases for other component names here...
                default:
                    return null;
            }
        });
    }

    function handleDragOver(event) {
        event.preventDefault();
        console.log("Drag Over");
    }

    function handleDragStart(e, item) {
        console.log("Dragging....");
        console.log(e.target.innerHTML);
        console.log(item.innerHTML)
        setDraggedItem(item.innerHTML);
    }

    function handleDrop(event) {
        event.preventDefault();
        console.log("Handle Drop Runnin... "+draggedItem)
        if (draggedItem) {
            addCode(draggedItem);
        }
    }

    return (
        <div className="write">
            <div className="write-blog-post" onDragOver={handleDragOver} onDrop={handleDrop}>
                <input className="title" type="text" placeholder="Title" />
                {renderComponents()}
            </div>
            
            <div className="layout-list">
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Image</div>
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Text</div>
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Text-Image</div>
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Image-Text</div>
            </div>

        </div>
    );
}

export default WriteBlog;
