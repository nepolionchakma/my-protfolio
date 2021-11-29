import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <div className=" sticky-top border-bottom ">
            <nav className="navbar navbar-expand-lg navbar-dark custom-color">
                <div className="container my-2">
                    <Link className="navbar-brand" to="#">Dev@Nepolion</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Nav;