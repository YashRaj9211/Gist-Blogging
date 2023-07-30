import { useState } from "react";


function ViewBlog({editorValue}){

    return(
        <>
         {/* <div className="view-blog">
             {editorValue}
         </div> */}
         <div className="view-blog" dangerouslySetInnerHTML={{ __html: editorValue }}></div>
        </>
        
        
    )
}

export default ViewBlog;