import React from 'react'
import img1 from '../../img/about.jfif'
const About = () => {
  return (
    <div>

      <section className="bg-success text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4">About TravelNow Tours</h1>
          <p className="lead">Your Trusted Partner for Memorable Journeys</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={img1} alt="About Us" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h2>Who We Are</h2>
              <p>TravelNow Tours is a premier tour booking agency dedicated to making your travel dreams come true. With years of experience, a passion for exploration, and a commitment to customer satisfaction, we bring you unforgettable adventures across the globe.</p>
              <p>We offer a wide range of curated tour packages, from relaxing getaways to thrilling expeditions, ensuring there's something for every kind of traveler.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
