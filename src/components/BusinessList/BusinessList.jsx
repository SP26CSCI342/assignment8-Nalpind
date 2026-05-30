import Business from '../Business/Business.jsx';
import React from 'react';
import './BusinessList.css';

function BusinessList({ businesses }) {
    return (
        <div className='BusinessList'>
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </div>
    );
}
export default BusinessList;