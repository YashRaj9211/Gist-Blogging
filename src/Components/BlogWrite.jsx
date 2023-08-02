import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import "../Assets/style/LayoutStyles/ImgTextStyle.css"

function BlogWrite() {
  const [enterText, setEnteredText] = useState("");

  console.log("Quill text..."+enterText);

  const modules = {
    toolbar: [
      // [{ font: [] }],
      // [{'size': ['56px']}], 
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  return (
      <ReactQuill modules={modules} theme="bubble" value={enterText} onChange={setEnteredText} placeholder="The content starts here..." />    
  )
}

export default BlogWrite;