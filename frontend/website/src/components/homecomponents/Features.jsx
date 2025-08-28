import React from 'react'

const Features = () => {
    return (
        <div className='text-center mt-5 mb-3 features ms-3 me-3'>
            <h1 className='mb-4'>Why Choose Tour Bus</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className='mt-5 ms-5 me-5 mb-2'>
                            <div className='m-3 pt-5 pb-5 cardicon'>
                                <i className="fa-solid fa-user-group"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Best Travel Agents</h5>
                            <p className="card-text">Choose us, and you'll enjoy exclusive offers and 24/7 dedicated customer service</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className='mt-5 ms-5 me-5 mb-2'>
                            <div className='m-3 pt-5 pb-5 cardicon'>
                                <i className="fa-solid fa-users-viewfinder"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Professional Team</h5>
                            <p className="card-text">With a professional team, we are committed to bringing you perfect vacations.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className='mt-5 ms-5 me-5 mb-2'>
                            <div className='m-3 pt-5 pb-5 cardicon'>
                                <i className="fa-brands fa-wpexplorer"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">New Experience</h5>
                            <p className="card-text">We turn your travel dreams into reality with unforgettable and safe experiences</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className='mt-5 ms-5 me-5 mb-2'>
                            <div className='m-3 pt-5 pb-5 cardicon'>
                                <i className="fa-solid fa-ranking-star"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Price & Quality</h5>
                            <p className="card-text">Explore the world with us on unique journeys, competitive prices, and 5-star service</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features
