import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Profile from "../../Image/profile.jpg"
import "./Banner.css"
import Typical from 'react-typical';
const Banner = () => {
    return (
        <div className="py-5 Banner">
            <div className="container">
                <div className="text-center ms-auto my-4 text-white">
                    <div>
                        <img className="w-25 img-thumbnail rounded-circle" src={Profile} alt="" />
                    </div>
                    <h5>Hello, I'm</h5>
                    <h2>Nepolion Chakma</h2>
                    <strong className="fs-4">
                        <Typical
                            steps={[
                                'Fornt-End Developer',
                                2000,
                                'Back-End Developer',
                                2000,
                                'Full-Stack Developer',
                                2000,
                            ]}
                            wrapper="p"
                            loop={Infinity}
                        />
                    </strong>
                    <div className="text-white">
                        <FontAwesomeIcon icon={faGithub} className="fs-2 m-3" />
                        <FontAwesomeIcon icon={faLinkedin} className="fs-2 m-3" />
                        <FontAwesomeIcon icon={faMailBulk} className="fs-2 m-3" />
                    </div>
                    <button className="btn btn-danger">Hire Me</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;