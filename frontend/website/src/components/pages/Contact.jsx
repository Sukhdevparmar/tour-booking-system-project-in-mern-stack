import React from 'react'

const Contact = () => {
  return (
    <div className='text-center'>

      <div className="banner">
        <img src=
          "https://media.geeksforgeeks.org/wp-content/uploads/20230822131732/images.png"
          alt="Welcome to our Contact Us page" />
        <h1>Get in Touch With Us</h1>
        <p>
          We're here to answer any questions you may have.
        </p>
      </div>


      <div className="contact-form">
        <div className="form-container">
          <h2>Your Details</h2>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow-sm">
                  <div className="card-header bg-success text-white">
                    <h4 className="mb-0">Contact Us</h4>
                  </div>
                  <div className="card-body">
                    <form action="#" method="POST">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message:</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="4"
                          required
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div></div>
  )

}

export default Contact
