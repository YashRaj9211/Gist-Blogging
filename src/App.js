import './assets/style/BlogCard.css'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './Components/Navbar';
import BlogWrite from './Components/BlogWrite';
import React, { useEffect, useState } from 'react';
import BlogPostsContainer from './Components/BloggPostsContainer';
import ImgLayout from './Components/Layouts/Img';
import ImgTextLayout from './Components/Layouts/ImgText';
import TextImgLayout from './Components/Layouts/TextImg';
import TextLayout from './Components/Layouts/Text';



function App() {

  const [componentOrder, setComponentOrder] = useState([]);

  function addCode(componentName) {
    setComponentOrder((prevOrder) => [...prevOrder, componentName]);
  }

  function renderComponents() {
    return componentOrder.map((componentName, index) => {
      switch (componentName) {
        case 'ImgLayout':
          return <ImgLayout key={index} />;
        case 'ImgTextLayout':
          return <ImgTextLayout key={index} />;
        case 'TextImgLayout':
          return <TextImgLayout key={index} />;
        case 'TextLayout':
          return <TextLayout key={index} />;
        // Add cases for other component names here...
        default:
          return null;
      }
    });
  }
  return (
    <div className="App" id='appp' >
      <p>{console.log("hell yeah")}</p>
      <div className='welcome'>
        <p>Welcome To the World of Joy!</p>
      </div>
      <BlogPostsContainer />
      <NavBar/>
      <div id="content-div">
        {renderComponents()}
      </div>
      <button onClick={()=>addCode('ImgLayout')}>Hit Me!!!</button>
      <button onClick={()=>addCode('ImgTextLayout')}>Hit to add imgtexxt!!!</button>
      <button onClick={()=>addCode('TextImgLayout')}>Hit to add texxtimg!!!</button>
      <button onClick={()=>addCode('TextLayout')}>Hit to add texxt!!!</button>
      {/* <ImgLayout></ImgLayout> */}
    </div>
  );
}

export default App;
