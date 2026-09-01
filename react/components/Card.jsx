import React from 'react'

const Card = () => {
    return (
        <div class="container my-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1566669086984-077347c1f4bb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZmxvd2VyfGVufDB8fDB8fHww" class="card-img-top" alt="Card Image 1" />
                        <div class="card-body">
                            <h5 class="card-title">Card Title One</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer bg-transparent border-top-0">
                            <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1566669086984-077347c1f4bb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZmxvd2VyfGVufDB8fDB8fHww" class="card-img-top" alt="Card Image 2" />
                        <div class="card-body">
                            <h5 class="card-title">Card Title Two</h5>
                            <p class="card-text">This card has shorter content but will perfectly match the height of its siblings due to the layout classes used.</p>
                        </div>
                        <div class="card-footer bg-transparent border-top-0">
                            <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-80 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1566669086984-077347c1f4bb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZmxvd2VyfGVufDB8fDB8fHww" class="card-img-top" alt="Card Image 3" />
                        <div class="card-body">
                            <h5 class="card-title">Card Title Three</h5>
                            <p class="card-text">This is another card layout holding content. The shadow utility adds a modern look without complex CSS.</p>
                        </div>
                        <div class="card-footer bg-transparent border-top-0">
                            <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card



