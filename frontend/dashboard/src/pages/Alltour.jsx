import { useState } from "react"
import { useListToursQuery } from "../stores/api"

const Alltour = () => {

  const [page, setPage] = useState(1);
  const { data: tours, isLoading, isFetching } = useListToursQuery(page);

  if (isLoading) {
    return <div>Loading...</div>
  }

  const tourList = Array.isArray(tours) ? tours : tours?.data;
  const totalpages = tours.length / 10;

  if (!tourList || tourList.length === 0) {
    return <div>no tours away label.</div>
  }


  return (
    <div className='mt-3'>
      <div className='d-flex justify-content-center'>
        <h2 className=''>All Tours List</h2>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tour Title</th>
            <th>All Places</th>
            <th>All NightPoint</th>
            <th>Starting place</th>
            <th>Ending place</th>
            <th>start date</th>
            <th>end date</th>
            <th>Total kilometers</th>
            <th>Tour price</th>
          </tr>
        </thead>
        <tbody>
          {tourList.map((tour, index) => {
            const maxLength = Math.max(
              tour.places?.length || 0,
              tour.nightpoints?.length || 0
            );

            return [...Array(maxLength)].map((_, i) => (
              <tr key={`${index}-${i}`}>
                <td>{i === 0 ? tour.title : ''}</td>
                <td>{tour.places?.[i]?.place || '-'}</td>
                <td>{tour.nightpoints?.[i]?.point || '-'}</td>
                <td>{i === 0 ? tour.startingplace : ''}</td>
                <td>{i === 0 ? tour.endingplace : ''}</td>
                <td>{i === 0 ? new Date(tour.startingdate).toLocaleDateString() : ''}</td>
                <td>{i === 0 ? new Date(tour.endingdate).toLocaleDateString() : ''}</td>
                <td>{i === 0 ? tour.km : ''}</td>
                <td>{i === 0 ? tour.price : ''}</td>

              </tr>
            ));
          })}

        </tbody>

      </table>

      <div className="pagination-buttons" style={{ marginTop: '10px', float: 'right', marginRight: '50px' }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || isFetching}
        >
          Previous
        </button>

        <span>Page:{page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page > totalpages}
        >
          Next
        </button>

      </div >
    </div >
  )
}

export default Alltour
