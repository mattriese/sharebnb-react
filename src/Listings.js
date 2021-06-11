import { useEffect, useState, useContext } from 'react';
import { SharebnbApi } from './api';
import ListingDetail from './ListingDetail';
import SearchForm from './SearchForm';

/** Listings component
 *
 * State:
 * - listings (array of objects)
 * - searchTerm (string)
 * - isError (boolean)
 * - isLoading (boolean)
 *
 * Routes -> Listings -> SearchForm
 *                    -> ListingDetail
 */
function Listings() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function handleSearch(searchTerm) {
    console.log('handleSearch ran');
    setSearchTerm(searchTerm);
  }

  useEffect(
    function getListings() {
      async function getAll() {
        try {
          let listingsRes = await SharebnbApi.getListings(searchTerm);
          setListings(listingsRes);
          setIsLoading(false);
          console.log('LISTINGSRES--->', listingsRes);
        } catch (err) {
          console.error('ERROR is= ', err);
          setIsError(true);
          setIsLoading(false);
        }
      }
      getAll();
    },
    [searchTerm]
  );

  if (isError) {
    return <h1>500 Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <SearchForm initialSearchTerm={searchTerm} handleSearch={handleSearch} />

    </div>
  );
}

export default Listings;

// line 58
// {listings.map((l) => (
//   <ListingDetail key={l.id} listing={l} />
// ))}
