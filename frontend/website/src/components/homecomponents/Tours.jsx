import { Link } from 'react-router';
import { useListToursQuery } from '../../store/api';

const Tours = () => {
    const { data: tours, isLoading, isError } = useListToursQuery();

    if (isLoading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    if (isError) {
        return <div className="text-center mt-5 text-danger">Failed to load tours.</div>;
    }

    const tourList = Array.isArray(tours) ? tours : tours?.data;

    if (!tourList || tourList.length === 0) {
        return <div className="text-center mt-5">No tours available.</div>;
    }

    return (
        <div className="text-center mt-5 tours ms-3 me-3 tour">
            <h1 className="mb-4 mb-3">All Wonderfull Tours</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {tourList.map((tour) => (
                    <div className="col" key={tour._id}>
                        <div className="card h-100">
                            <img
                                src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${tour.image}`}
                                className="card-img-top"
                                alt={tour.title}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{tour.title}</h5>
                                <Link to={`/tour/${tour.title}`} className="btn bg-success text-white mt-3">
                                    View Details
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tours;
