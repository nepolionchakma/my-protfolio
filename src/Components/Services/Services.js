import React from 'react';
import "./Services.css"

const Services = () => {
    return (
        <div className="container py-5 text-white">
            <h1 className="my-5 fw-bold text-center">Services</h1>
            <div className="row m-0 ">
                <div className="col-lg-4 mx-auto py-3  text-center rounded ">
                    <div className=" service-1 p-3 m-2 rounded">
                        <img className="w-50" src="https://bolby-react.vercel.app/images/service-1.svg" alt="" />
                        <h3 className="my-3 fw-bold">Full-Stack Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                    </div>
                </div>
                <div className="col-lg-4 mx-auto py-3  text-center rounded ">
                    <div className=" service-2 p-3 m-2 rounded">
                        <img className="w-50" src="https://bolby-react.vercel.app/images/service-2.svg" alt="" />
                        <h3 className="my-3 fw-bold">Font-End Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;