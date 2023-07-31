import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";

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