import { useState } from 'react';
import { Link } from 'react-router';
import { useListToursQuery } from '../../store/api';

const Tours = () => {
    const { data: tours, isLoading, isError } = useListToursQuery();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTours, setFilteredTours] = useState(null);

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

    const handleSearch = () => {
        const regex = new RegExp(searchTerm, 'i');
        const result = tourList.filter((tour) => regex.test(tour.title));
        setFilteredTours(result);
    };

    const displayedTours = filteredTours ?? tourList;

    return (
        <div className="text-center mt-5 tours ms-3 me-3 tour">
            <div className='d-flex'>
                <input type="text" name='search' className="d-flex mt-4 p-2" placeholder='Search a tour' value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button className='ms-2 mt-4 ps-3 pe-3 border-0' onClick={handleSearch} > Search </button>
            </div>

            <h1 className="mb-4 mt-3 mb-3">All Dream Tours List</h1>

            {displayedTours.length === 0 ? (
                <div className="text-center mt-4">No matching tours found.</div>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {displayedTours.map((tour) => (
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
            )}
        </div>
    );
};

export default Tours;
