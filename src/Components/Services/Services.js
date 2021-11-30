import React, { useState } from 'react';
import "./Services.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, Modal } from 'react-bootstrap';
import p1 from '../../Images/p1.jpg';
import p2 from '../../Images/p2.jpg';
import p3 from '../../Images/p3.jpg';
import p4 from '../../Images/p4.jpg';
import p5 from '../../Images/p5.jpg';
import p6 from '../../Images/p6.jpg';
import p7 from '../../Images/p7.jpg';
import p8 from '../../Images/p8.jpg';
import p9 from '../../Images/p9.jpg';
import Slider from "react-slick";



const Services = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container py-5 text-white">
            <ScrollAnimation animateIn='fadeInLeft'
                animateOut='fadeOut'>
                <h1 className="my-5 fw-bold text-center">Projects</h1>
                <div className="row m-0 ">

                    <div className="col-lg-4 mx-auto py-3  text-center rounded ">

                        <div className=" service-1 p-3 m-2 rounded">
                            <img className="w-50" src={p1} alt="" />
                            <h3 className="my-3 fw-bold">Jum Motors</h3>
                            <span className="fw-bold">Technology used :</span> React Js, React Router, Bootstrap, Material UI, React
                            Hook Form, Express js, Firebase, Node Js, MongoDb, Heroku, Netlify.
                            <>
                                <div className="pb-4">
                                    <Button className="d-flex justify-content-center m-auto" variant="primary" onClick={() => setShow(true)}>
                                        More
                                    </Button>

                                    <Modal
                                        show={show}
                                        size="lg"
                                        onHide={() => setShow(false)}
                                        centered
                                    >
                                        <Modal.Body>
                                            <div className="my-4 ">
                                                <Slider {...settings}>
                                                    <div>
                                                        <img className="w-25 h-50" src={p7} alt="" />
                                                    </div>
                                                    <div>
                                                        <img className="w-25" src={p8} alt="" />
                                                    </div>
                                                    <div>
                                                        <img className="w-25" src={p9} alt="" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div>
                                                <h4 className="fw-bold">Product Shop Related (Jum Motors)</h4>
                                                <span className="fw-bold">Features :</span>
                                                ●  Users can see all products but if they want to see details users have to sign-in must or sign-up and also users can sign-in with Google,Github.
                                                ● There is an admin panel and all users have a regular dashboard. Admin can manage all kinds of product add, delete, and review.
                                                ●  Admin can manage another user to admin. All products added are dynamically  Site full responsive .

                                                <span className="fw-bold">Technology used :</span> React Js, React Router, Bootstrap, Material UI, React
                                                Hook Form, Express js, Firebase, Node Js, MongoDb, Heroku, Netlify.
                                                <div className="my-2">
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://jum-motors.netlify.app/">Live</a>
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://github.com/nepolionchakma/jum-motors-client">Client</a>
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://github.com/nepolionchakma/jum-motors-client">Server</a>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className="col-lg-4 mx-auto py-3  text-center rounded ">

                        <div className=" service-1 p-3 m-2 rounded">
                            <img className="w-50" src={p4} alt="" />
                            <h3 className="my-3 fw-bold">Jum TT</h3>
                            <span className="fw-bold">Technology used :</span> React Js, React Router, Bootstrap, Material UI, React
                            Hook Form, Express js, Firebase, Node Js, MongoDb, Heroku, Netlify.
                            <>
                                <div className="pb-4">
                                    <Button className="d-flex justify-content-center m-auto" variant="primary" onClick={() => setShow1(true)}>
                                        More
                                    </Button>

                                    <Modal
                                        show1={show1}
                                        size="lg"
                                        onHide={() => setShow1(false)}
                                        centered
                                    >
                                        <Modal.Body>
                                            <div className="my-4 ">
                                                <Slider {...settings}>
                                                    <div>
                                                        <img className="w-25 h-50" src={p1} alt="" />
                                                    </div>
                                                    <div>
                                                        <img className="w-25" src={p2} alt="" />
                                                    </div>
                                                    <div>
                                                        <img className="w-25" src={p3} alt="" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div>
                                                <h4 className="fw-bold">Travel And Tourism Related (Jum tt)</h4>
                                                <span className="fw-bold">Features :</span>
                                                ● Full Responsive with Firebase Authentication
                                                ● Special Offers, Dynamically Manage Services
                                                ● User Experience, Easy Bookin

                                                <span className="fw-bold">Technology used :</span> React Js, React Router, Bootstrap, Material UI, React
                                                Hook Form, Express js, Firebase, Node Js, MongoDb, Heroku, Netlify.
                                                <div className="my-2">
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://jum-t-t.netlify.app/">Live</a>
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://github.com/nepolionchakma/jum-travel-tourism-client">Client</a>
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://github.com/nepolionchakma/jum-travel-tourism-server">Server</a>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className="col-lg-4 mx-auto py-3  text-center rounded ">

                        <div className=" service-1 p-3 m-2 rounded">
                            <img className="w-50" src={p7} alt="" />
                            <h3 className="my-3 fw-bold">Jum Health Care</h3>
                            <span className="fw-bold">Technology used :</span> React Js, React Router, Bootstrap, React
                            Hook Form, Express js, Firebase, Node Js .

                            <>
                                <div className="pb-4">
                                    <Button className="d-flex justify-content-center m-auto" variant="primary" onClick={() => setShow2(true)}>
                                        More
                                    </Button>

                                    <Modal
                                        show2={show2}
                                        size="lg"
                                        onHide={() => setShow2(false)}
                                        centered
                                    >
                                        <Modal.Body>
                                            <div className="my-4 ">
                                                <Slider {...settings}>
                                                    <div>
                                                        <img className="w-25 h-50" src={p4} alt="" />
                                                    </div>
                                                    <div>
                                                        <img className="w-25" src={p5} alt="" />
                                                    </div>
                                                    <div>
                                                        <img className="w-25" src={p6} alt="" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div>
                                                <h4 className="fw-bold">Health Care Related (Jum Health Care)</h4>
                                                <span className="fw-bold">Features :</span>
                                                ● Firebase Authentication
                                                ● Dynamically Manage Services
                                                ● User Experience, Full Responsive

                                                <span className="fw-bold">Technology used :</span> React Js, React Router, Bootstrap, Material UI, React
                                                Hook Form, Express js, Firebase, Node Js, MongoDb, Heroku, Netlify.
                                                <div className="my-2">
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://jum-health-care.netlify.app/">Live</a>
                                                    <a className="btn btn-success text-white fw-bold mx-2 text-decoretion-none" href="https://github.com/nepolionchakma/jum-health-care">Client</a>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </>
                        </div>
                    </div>
                </div>

            </ScrollAnimation>
        </div>
    );
};

export default Services;