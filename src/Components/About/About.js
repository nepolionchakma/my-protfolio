import React from 'react';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import "./About.css"
import Profile from "../../Images/profile.jpg"

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

    return (
        <div>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <div className="container">
                    <h1 className="my-5 fw-bold text-center">About Me</h1>
                    <div className="row m-0 ">
                        <div className="col-lg-4 m-auto ">

                            <div className="p-4 d-flex justify-content-center align-items-center">
                                <img className="w-50 img-thumbnail rounded-circle" src={Profile} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 py-4">

                            <div className="p-4 text-white color-2 rounded row">
                                <div className="p-4 col-lg-6 text-white">

                                    <div className="">
                                        <p>Front-End Developer with a proven
                                            ability to collaborate effectively with
                                            senior developers while spending
                                            extra time to be mentored. Enjoy
                                            working closely with team members
                                            to ensure workloads are effectively
                                            redirected to bottlenecks and
                                            personally picking up the slack when
                                            necessary. With a passion for both
                                            personal growth and for software
                                            development, I attended a 1000+ hour
                                            coding bootcamp to learn new
                                            languages while sharpening existing
                                            skills. Ready to apply my passion for
                                            coding to a talented engineering
                                            team to develop quality solutions.</p>
                                        <Button className="btn btn-success">Resume <FontAwesomeIcon icon={faFileDownload} /></Button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <div className="">
                                            <span className="mx-auto d-inline">Fornt-End</span>
                                        </div>
                                        <div className="progress">

                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="">
                                            <span className="mx-auto d-inline">Back-End</span>
                                        </div>
                                        <div className="progress">

                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="">
                                            <span className="mx-auto d-inline">Full_Stack</span>
                                        </div>
                                        <div className="progress">

                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default About;