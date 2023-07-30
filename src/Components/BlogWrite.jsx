import "../assets/style/BlogWrite.css"
// import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import ViewBlog from "./ViewBlog";

function BlogWrite() {

  const modules = {
    toolbar: [
      [{ font: [] }],
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
      <ReactQuill modules={modules} theme="bubble" placeholder="The content starts here..." />    
  )
}

export default BlogWrite;