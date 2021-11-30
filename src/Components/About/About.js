import React from 'react';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import "./About.css"
import Profile from "../../Images/profile.jpg"

const About = () => {

    return (
        <div>
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
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias deleniti voluptatem fugiat commodi optio dicta unde praesentium eaque reiciendis magnam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
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
        </div>
    );
};

export default About;