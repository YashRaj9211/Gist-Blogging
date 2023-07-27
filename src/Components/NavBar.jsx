import "../assets/style/NavBar.css"

function NavBar(){
    return(
        <div className="nav-bar">
            <div className="logo">Gist</div>
            <div className="tabs">
                <ul className="nav-items">
                    <li className="item">Home</li>
                    <li className="item">Write</li>
                    <li className="item" id="login">Login</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;