import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"
import Profile from "../../Images/profile.jpg"
import Typewriter from 'typewriter-effect';
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="py-5 Banner">
            <div className="container">
                <div className="text-center my-4 text-white row">
                    <div className="col-lg-6 mx-auto">
                        <img className="w-25 img-thumbnail rounded-circle" src={Profile} alt="" />
                        <h5 className="my-2">Hello, I'm</h5>
                        <h2 className="my-2">Nepolion Chakma</h2>
                        <strong className="fs-4 text-warning">
                            <Typewriter
                                options={{
                                    strings: ['React Developer', 'Fornt-End Developer', 'Full-Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </strong>
                        <div className="text-white">
                            <FontAwesomeIcon icon={faGithub} className="fs-2 m-3" />
                            <FontAwesomeIcon icon={faLinkedin} className="fs-2 m-3" />
                            <FontAwesomeIcon icon={faMailBulk} className="fs-2 m-3" />
                        </div>
                        <Nav.Link as={HashLink} to="/home#contact" className="text-white fw-bold  w-25 mx-auto nav-link btn btn-danger">Hire Me</Nav.Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;