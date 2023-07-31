import React, { useState } from "react";
import BlogWrite from "../Components/BlogWrite";
import LayoutList from "../Components/LayoutList";
import "../Assets/style/Write.css";
import "../Assets/style/LayoutList.css";

function WriteBlog() {
    const [draggedItem, setDraggedItem] = useState(null);

    function handleDragOver(event) {
        event.preventDefault();
        console.log("Drag Over");
    }

    function handleDragStart(e, item) {
        console.log("Dragging....");
        console.log(e.target.innerHTML);
        setDraggedItem(item);
    }

    function handleDrop(event) {
        event.preventDefault();
        if (draggedItem) {
            const content = draggedItem.textContent; // or any data you want to transfer

            // Add the content to the write-blog-post section
            const writeBlogPost = document.querySelector(".write-blog-post");
            writeBlogPost.innerHTML += content;
        }
    }

    return (
        <div className="write">
            <div className="write-blog-post" onDragOver={handleDragOver} onDrop={handleDrop}>
                {/* Your existing code here */}
                <input className="title" type="text" placeholder="Title" />
            </div>
            {/* <LayoutList /> */}

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
