import React, { useState } from "react";

import ImgLayout from "../Layouts/Img";
import ImgTextLayout from "../Layouts/ImgText"
import TextLayout from "../Layouts/Text"
import TextImgLayout from "../Layouts/TextImg"
import scg from "../Assets/Frame 3.svg";

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
        console.log("Component oRder... "+componentOrder)
        return componentOrder.map((componentName, index) => {
            switch (componentName) {
                case 'Image':
                    return (
                        <div key={index} >
                            <ImgLayout />
                            <button onClick={() => handleDelete(index)}>Delte</button>
                        </div>
                    
                    );
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

    function handleDelete(index) {
        setComponentOrder((prevOrder) => {
          const newOrder = [...prevOrder];
          newOrder.splice(index, 1);
          return newOrder;
        });
      }

    return (
        <div className="blog-write-container">           
            
            <div className="layout-list">
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Image</div>
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Text</div>
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Text-Image</div>
                <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Image-Text</div>
            </div>

            <div className="write-blog-post">
                <input className="title" type="text" placeholder="Title" />
                {renderComponents()}
                          
                <div className="drop-here" onDragOver={handleDragOver} onDrop={handleDrop}>
                    <div className="content-border" >
                        DROP HERE
                    </div>
                </div>
                
            </div>

            <div className="right-container">
                <div className="hints">
                    <span>Hint</span>
                    <ul>
                        <li>
                            You can combine the patterns in many differnt ways to get an amazing outlet
                        </li>
                        <li>
                            Experiment with the text editing tool
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default WriteBlog;
