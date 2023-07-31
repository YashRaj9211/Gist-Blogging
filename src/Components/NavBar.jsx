import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass, faBook } from '@fortawesome/free-solid-svg-icons'
import "../Assets/style/NavBar.css"

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
          <li className="item"><Link to={`/`}><FontAwesomeIcon icon={faBook} />Home</Link></li>
          <li className="item"><Link to={`/writeblog`}><FontAwesomeIcon icon={faEnvelope} /> Write</Link></li>
          <li className="item" id="login"><Link to={`/login`}><FontAwesomeIcon icon={faEnvelope} /> Login</Link></li>
        </ul>
      </div>
      
    </div>
  );
}

export default NavBar;
