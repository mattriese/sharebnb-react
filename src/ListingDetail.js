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
function ListingDetail(listing) {
  console.log("listingData:::: ", listing)
  const { id } = useParams();
  //const [listing, setListing] = useState([listingData]);
  //const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //console.log('', );

  // useEffect(
  //   function getListing() {
  //     async function getListingData() {
  //       try {
  //         let listingRes = await SharebnbApi.getListing(id);
  //         console.log('COMPANIESRES--->', listingRes);
  //         setListing(listingRes);
  //         setIsLoading(false);
  //       } catch (err) {
  //         setIsError(true);
  //         setIsLoading(false);
  //       }
  //     }
  //     getListingData();
  //   },
  //   [id]
  // );

  if (isError) {
    return <h1>500 Error</h1>;
  }

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div>
      <div>
        {listing.listing.photos.map(p => <img key={p.id} src={p.image_url}/>)}
        <h2>{listing.listing.title}</h2>
        <h3>{listing.listing.location}</h3>
        <h4>{listing.listing.price}</h4>
        <p>{listing.listing.description}</p>
      </div>
    </div>
  );
}

export default ListingDetail;
//        <img src={listing.photos[0]}/>
