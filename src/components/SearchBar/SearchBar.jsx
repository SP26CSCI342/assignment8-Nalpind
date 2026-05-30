import { React, useEffect, useState } from 'react';
import './SearchBar.css';


const sortByOptions = {

    "Best Match": "best_match",

    "Highest Rated": "rating",

    "Most Reviewed": "review_count"

};
function renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => (
        <li key={sortByOptions[sortByOption]}>
            {sortByOption}
        </li>
    ));
}

function SearchBar(props) {
    const [term, setTerm] = useState("");
    const [location, setLoc] = useState("");
    const [sortBy, setSortBy] = useState(sortByOptions['Best Match']);

    useEffect(() => {
        if(term) {
            document.title = `PlateScout - Searching for ${term}`;
        } else {
            document.title = 'PlaceScout'
        }
    }, [term]);
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocChange = (event) => {
        setLoc(event.target.value);
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchYelp(term, location, sortBy);
    };

    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? 'active' : '';
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => handleSortByChange(sortByOptionValue)}>
                    {sortByOption}
                </li>
            );
        });
    };


    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input value={term} onChange={handleTermChange} placeholder="Search Businesses" />
                <input value={location} onChange={handleLocChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <button onClick={handleSearch}>Let's Go</button>
            </div>
        </div>
    );
}
export default SearchBar;