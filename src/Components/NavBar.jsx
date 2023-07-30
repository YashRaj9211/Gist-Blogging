import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass, faBook } from '@fortawesome/free-solid-svg-icons'
import '../assets/style/NavBar.css';

function NavBar() {
  // const [offset,setOffset]=useState(0);
  // useEffect(()=>{

  //   window.addEventListener('scroll',()=>{
  //     const navBar=document.getElementById('nav');
  //     const tranp=window.pageYOffset/200>=1?1 :window.pageYOffset/200;
  //     console.log(tranp);
  //     navBar.style=`background-color:rgba(0, 0, 0, ${tranp}); color:rgba(${255/tranp}, ${255/tranp}, ${255/tranp});`
  //     // navBar.style=``

  //     setOffset(window.pageYOffset);
  //     console.log(window.pageYOffset)
  //   })
  // },[])
  return (
    <div className="nav-bar" id='nav'>
      <div className="logo">Gist</div>
      <div className="tabs">
        <ul className="nav-items">
          <li className="item"><FontAwesomeIcon icon={faBook} /> Home</li>
          <li className="item"><FontAwesomeIcon icon={faEnvelope} /> Write</li>
          <li className="item" id="login">Login</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
