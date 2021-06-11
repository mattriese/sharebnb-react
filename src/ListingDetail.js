import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SharebnbApi } from './api';

/** ListingDetail component
 *
 * State:
 * - company
 * - isLoading
 * - isError
 *
 * Params:
 * - handle
 *
 * Routes -> ListingDetail -> JobCardList
 */
function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //console.log('', );

  useEffect(
    function getListing() {
      async function getListingData() {
        try {
          let listingRes = await SharebnbApi.getListing(id);
          console.log('COMPANIESRES--->', listingRes);
          setListing(listingRes);
          setIsLoading(false);
        } catch (err) {
          setIsError(true);
          setIsLoading(false);
        }
      }
      getListingData();
    },
    [id]
  );

  if (isError) {
    return <h1>500 Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        <h2>{listing.name}</h2>
        <p>{listing.description}</p>
      </div>
    </div>
  );
}

export default ListingDetail;
