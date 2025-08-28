import React from 'react'
import img1 from '../../img/articalimg1.jpg'
import img2 from '../../img/articalimg2.jpg'
import img3 from '../../img/articalimg3.jpg'

const Artical = () => {
    return (
        <div className='artical mt-5'>
            <div className='mt-5 ms-3 me-3 mb-5'>
                <h2>About us Restaurant</h2>
                <h1 className='float-left'>News & Articales From Tourm</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    <div className="col">
                        <div className="card h-100">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Exproring The Greeen Spaces Of Realer Residencidence Harmony</h5>
                                <button className='btn bg-success text-white'>Read More<i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Univercity Class Strating Soon While The Lovely Valley team</h5>
                                <button className='btn bg-success text-white'>Read More<i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Living Sustainability : A day inthe life atrealearer residence</h5>
                                <button className='btn bg-success text-white'>Read More<i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Artical
