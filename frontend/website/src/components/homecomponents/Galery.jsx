import React from 'react'
import img1 from '../../img/galeryimg1.jpg'
import img2 from '../../img/galeryimg2.jpg'
import img3 from '../../img/galeryimg3.jpg'
import img4 from '../../img/galeryimg4.jpg'
import img5 from '../../img/galeryimg5.jpg'
import img6 from '../../img/galeryimg6.jpg'
import img7 from '../../img/galeryimg7.jpg'
const Galery = () => {
    return (
        <div className='text-center jus galery mt-5 pt-4 pb-5'>
            <h2>Make Your Tour More Pleasure</h2>
            <h1>Recent Gallery</h1>
            <div className='d-flex justify-content-center mt-4'>
                <div className='me-3'>
                    <img className='imggalery' src={img1} alt="" />
                </div>
                <div className='me-3'>
                    <img className='imggalery' src={img2} alt="" />
                    <br />
                    <img className='imggalery' src={img3} alt="" />
                </div>
                <div className='me-3 '>
                    <img className='midimage' src={img4} alt="" />
                </div>
                <div className='me-3'>
                    <img className='imggalery' src={img5} alt="" />
                    <br />
                    <img className='imggalery' src={img6} alt="" />
                </div>
                <div className='me-3'>
                    <img className='imggalery' src={img7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Galery
