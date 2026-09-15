import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://img.magnific.com/premium-photo/horizontal-floral-border-boho-style-flower-arrangement-floral-garland-with-wildflowers-herbs-floral-element-collage-design-postcards-greeting-cards-wedding-cards_1033579-219209.jpg?semt=ais_hybrid&w=740&q=80"
                            className="d-block w-100"
                            alt="First slide"
                            style={{ height: "400px", objectFit: "cover" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First Slide Title</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://img.magnific.com/free-photo/top-view-colorful-amazing-flowers-such-as-roses-daisy-flowers-white-background-with-space_141793-51944.jpg?semt=ais_hybrid&w=740&q=80"
                            className="d-block w-100"
                            alt="Second slide"
                            style={{ height: "400px", objectFit: "cover" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second Slide Title</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/071/369/942/small/flowers-background-flowers-wallpaper-vibrant-flower-fields-in-horizontal-stripes-of-pink-orange-yellow-purple-and-white-under-a-blue-sky-photo.jpg"
                            className="d-block w-100"
                            alt="Third slide"
                            style={{ height: "400px", objectFit: "cover" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third Slide Title</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel