import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white pt-5 pb-4">
                <div className="container text-center text-md-start">
                    <div className="row text-center text-md-start">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                            <p><a href="#" className="text-white text-decoration-none">Bootstrap</a></p>
                            <p><a href="#" className="text-white text-decoration-none">Design</a></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                            <p><a href="#" className="text-white text-decoration-none">Your Account</a></p>
                            <p><a href="#" className="text-white text-decoration-none">Help</a></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                        </div>
                    </div>

                    <hr className="mb-4" />

                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p>© 2026 Copyright: <a href="#" className="text-warning text-decoration-none"><strong>Company.com</strong></a></p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer