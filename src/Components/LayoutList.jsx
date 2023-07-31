import "../Assets/style/LayoutList.css"

function LayoutList(){

    function handleDragStart(e){
        console.log("Dragging....")
        console.log(e.target.innerHTML);
    }
    return(
        <div className="layout-list">
            <div className="layout-item" draggable="true" onDragStart={(e) => handleDragStart(e, e.target)}>Image</div>            <div className="layout-item" draggable="true" onDragStart={handleDragStart}>Text</div>
            <div className="layout-item" draggable="true" onDragStart={handleDragStart}>Image-Text</div>
            <div className="layout-item" draggable="true" onDragStart={handleDragStart}>Text-Image</div>
        </div>
    );
}

export default LayoutList;