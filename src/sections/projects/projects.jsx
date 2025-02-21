import React from "react";
import projectImage1 from "../../assets/new.png";
import projectImage from "../../assets/new 1.png";
import projectImage2 from "../../assets/project1.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Projects = () => {
    return (
        <section id="portfolio" className="my-5">
            <div className="container">
                <h2 className="text-center mb-4">Recent Projects</h2>
                <p className="text-center mb-5">
                    Check out some of the projects I recently worked on for my clients.
                </p>

                <div className="row g-4">
                    {/* Project 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-lg border-0">
                            <img src={projectImage1} className="card-img-top img-fluid object-fit-cover" alt="Project One" style={{ height: "200px" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">WordPress SDF Website</h5>
                                <p className="card-text">I recently created a WordPress website for Sukh Foundation (SDF).
                                    The website is designed to be modern, user-friendly, and fully responsive, ensuring seamless access on all devices.</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a href="https://sdf.org.pk/" className="btn sm primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-lg border-0">
                            <img src={projectImage} className="card-img-top img-fluid object-fit-cover" alt="Project Two" style={{ height: "200px" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">AI BG Remover</h5>
                                <p className="card-text">I developed an AI-powered background remover using React.js and the OpenAI API.
                                    This tool allows users to effortlessly remove backgrounds from images with high precision.</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a href="https://sdf.org.pk/" className="btn sm primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-lg border-0">
                            <img src={projectImage2} className="card-img-top img-fluid object-fit-cover" alt="Project Three" style={{ height: "200px" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">CRUD In React</h5>
                                <p className="card-text">I developed a CRUD application using React.js,
                                    enabling dynamic data fetching and storage to provide a smooth and interactive user experience for
                                    efficient data management.</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a href="https://sdf.org.pk/" className="btn sm primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
