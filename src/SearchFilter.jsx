import React, { useState } from 'react';
import './SearchFilter.css'; // Import the custom CSS file for SearchFilter

const SearchFilter = ({ onSearch }) => {
    const [filter, setFilter] = useState({
        roomType: '',
        checkInDate: '',
        checkOutDate: ''
    });

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filter);
    };

    return (
        <div className="search-filter-container mb-5">
            <h2 className="text-center mb-4 search-filter-title">Search Rooms</h2>
            <form onSubmit={handleSubmit} className="search-filter-form">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="roomType">Room Type</label>
                        <select
                            id="roomType"
                            name="roomType"
                            className="form-control search-filter-select"
                            value={filter.roomType}
                            onChange={handleChange}
                        >
                            <option value="">Select Room Type</option>
                            <option value="AC">AC</option>
                            <option value="Non-AC">Non-AC</option>
                            <option value="Cottage">Cottage</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="checkInDate">Check-In Date</label>
                        <input
                            type="date"
                            id="checkInDate"
                            name="checkInDate"
                            className="form-control search-filter-date"
                            value={filter.checkInDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="checkOutDate">Check-Out Date</label>
                        <input
                            type="date"
                            id="checkOutDate"
                            name="checkOutDate"
                            className="form-control search-filter-date"
                            value={filter.checkOutDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary search-filter-button">Search Rooms</button>
            </form>
        </div>
    );
};

export default SearchFilter;
