import { useParams } from 'react-router-dom';
import { useGetTourQuery } from '../../store/api';
import { useNavigate } from 'react-router-dom';

const TourDetail = () => {
    const { title } = useParams();
    const { data: tour, isLoading, isError } = useGetTourQuery(title);
    const navigate = useNavigate();

    const handleBookNow = () => {
        const user = localStorage.getItem('auth');

        if (!user) {
            alert("please login first to book this tour")
            return;
        }
        else {
            navigate('/book', { state: { tour } });
        }

    };
    if (isLoading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    if (isError || !tour) {
        return <div className="text-center mt-5 text-danger">Failed to load tour details.</div>;
    }


    return (
        <div className="container mt-5">
            <h2 className='pt-3'>Tour Name: {tour.title}</h2>
            <hr />
            <img
                src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${tour.image}`}
                alt={tour.title}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                className="mb-3"
            />
            <hr />
            <div className="mt-4">
                <h4> All Places</h4>
                {Array.isArray(tour.places) && tour.places.length > 0 ? (
                    tour.places.map((item, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Point {index + 1}:</strong> {item.place || '-'}</p>

                        </div>
                    ))
                ) : (
                    <p>No night points available.</p>
                )}
            </div>
            <hr />
            <div className="mt-4">
                <h4>All Night Points</h4>
                {Array.isArray(tour.nightpoints) && tour.nightpoints.length > 0 ? (
                    tour.nightpoints.map((item, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Point {index + 1}:</strong> {item.point || '-'}</p>

                        </div>
                    ))
                ) : (
                    <p>No night points available.</p>
                )}
            </div>
            <hr />
            <p><strong>Starting Place:</strong> {tour.startingplace}</p>
            <p><strong>Ending Place:</strong> {tour.endingplace}</p>
            <p><strong>Starting Date:</strong> {tour.startingdate}</p>
            <p><strong>Ending Date:</strong> {tour.endingdate}</p>
            <p><strong>Astimeted Kilometers:</strong> {tour.km}</p>
            <p><strong>Price Per Person:</strong> ${tour.price}</p>

            <button className="btn btn-primary mt-3" onClick={handleBookNow}>
                Book Now
            </button>


        </div>
    );
};

export default TourDetail;
