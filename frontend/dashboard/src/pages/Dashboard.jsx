import React from 'react'

const Dashboard = () => {
  return (
    <div className=''>

      <div>
        <span className='fs-5'><b>Tours</b></span>
        <button className='btn btn-light float-end'>All     <i className="fa-solid fa-caret-down"></i></button>
      </div>

      <div className='mt-4'>
        <div className="row row-cols-1 row-cols-md-4 g-2">
          <div className="col">
            <div className="card h-100 pt-2 ps-2 card1 ">

              <div className="card-body">
                <h5 className="card-title">Total Tour</h5>
                <p className="card-text fs-4">53</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 pt-2 ps-2 card2">

              <div className="card-body">
                <h5 className="card-title">Total users</h5>
                <p className="card-text fs-4">1986</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 pt-2 ps-2 card3">

              <div className="card-body">
                <h5 className="card-title">Total Booked Tours</h5>
                <p className="card-text fs-4">4274</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 pt-2 ps-2 card4">

              <div className="card-body">
                <h5 className="card-title">Total sallers</h5>
                <p className="card-text fs-4">$597,974.59</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='ps-2 pt-2 pe-2 bg-white orderstatic'>
        <span><b>Tours Statistics</b></span>
        <button className='btn btn-light float-end'>All      <i className="fa-solid fa-caret-down"></i></button>
      </div>


      <div className='mt-3'>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100 pt-1 ps-1">

              <div className="card-body">
                <h5 className="card-title">Tour cancelled</h5>
                <p className="card-text fs-4">296</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 pt-1 ps-1">

              <div className="card-body">
                <h5 className="card-title">Pending Tour</h5>
                <p className="card-text fs-4">3976</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 pt-1 ps-1">

              <div className="card-body">
                <h5 className="card-title">Confirmed Tours</h5>
                <p className="card-text fs-4">0</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 pt-1 ps-1">

              <div className="card-body">
                <h5 className="card-title">Packeg pick up</h5>
                <p className="card-text fs-4">0</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className='mt-3'>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100 pt-1 ps-1">

              <div className="card-body">
                <h5 className="card-title">On the way</h5>
                <p className="card-text fs-4">0</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 pt-1 ps-1">

              <div className="card-body">
                <h5 className="card-title">Complete Tour</h5>
                <p className="card-text fs-4">0</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


  )
}

export default Dashboard
