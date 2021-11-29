import React from 'react';

const Blogs = () => {
    return (
        <div className="container py-5 text-white">
            <h1 className="my-5 fw-bold text-center">Latest Posts</h1>
            <div className="row m-0 ">
                <div className="col-lg-4  py-3 rounded ">
                    <div className=" service-1  m-2 rounded">
                        <img className="w-100" src="https://bolby-react.vercel.app/images/blog/1.svg" alt="" />
                        <div className="p-3">
                            <h3 className="my-3 fw-bold">Full-Stack Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  py-3 rounded ">
                    <div className=" service-1  m-2 rounded">
                        <img className="w-100" src="https://bolby-react.vercel.app/images/blog/2.svg" alt="" />
                        <div className="p-3">
                            <h3 className="my-3 fw-bold">Full-Stack Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  py-3 rounded ">
                    <div className=" service-2  m-2 rounded">
                        <img className="w-100" src="https://bolby-react.vercel.app/images/blog/3.svg" alt="" />
                        <div className="p-3">
                            <h3 className="my-3 fw-bold">Full-Stack Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;