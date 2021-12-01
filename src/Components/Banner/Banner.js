import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"
import Profile from "../../Images/profile.jpg"
import Typewriter from 'typewriter-effect';
import { HashLink } from 'react-router-hash-link';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Banner = () => {
    return (
        <div className="py-5 Banner">
            <ScrollAnimation
                animateIn='fadeIn'
                animateOut='fadeOut'>
                <div className="container">
                    <div className="text-center my-4 text-white row">
                        <div className="col-lg-6 mx-auto">
                            <img className=" w-25 img-thumbnail rounded-circle" src={Profile} alt="" />
                            <h5 className="my-2">Hello Dear, I'm</h5>
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
                                <a href="https://github.com/nepolionchakma"> <FontAwesomeIcon icon={faGithub} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3" /></a>
                                <a href="https://www.linkedin.com/in/nepolionchakma/"> <FontAwesomeIcon icon={faLinkedin} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3" /></a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/file/d/1R0gB4ISkrqWWpw7JqxwKmUmRLKr2znPi" target="_blank" rel="noreferrer noopener"
                                    className="inline-block text-white fw-bold d-inline mx-2 nav-link btn btn-success">Resume <FontAwesomeIcon icon={faFileDownload} /></a>
                                <Link as={HashLink} to="/explore" className="inline-block text-white fw-bold d-inline mx-2 nav-link btn btn-success">Explore Me <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollAnimation>
        </div>

    );
};

export default Banner;