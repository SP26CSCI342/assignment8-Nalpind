import { useState } from "react";
import BusinessList from '../components/BusinessList/BusinessList.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import Subscription from '../components/Subscription/Subscription.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { searchBusinesses } from '../util/yelp';
import './HomePage.css';

export default function HomePage() {
    const [ businesses, setBusinesses ] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [ error, setError ] = useState(null);


    const searchYelp = async (term, location, sortBy) => {
        setLoading(true);
        setError(null);
        try {
            const data = await searchBusinesses(term, location, sortBy);
            setBusinesses(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="HomePage">
            <SearchBar searchYelp={searchYelp} />
            {loading && <p className="HomePage-status">Loading...</p>}
            {error && <p className="HomePage-status HomePage-status--error">{error}</p>}
            {!loading && !error && <BusinessList businesses={businesses}/>}

            <BusinessList businesses={businesses} />
            <Subscription />
            <Footer />
        </main>
    );
}





