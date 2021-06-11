import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';

/** SignupForm component
 *
 * Props: handleLoginOrSignup (function)
 *
 * State: listingData (object)
 *
 * Routes -> SignupForm
 */
function NewListingForm({ addListing }) {
  const inputRef = useRef();
  const currUser = useContext(CurrUserContext);
  console.log("currUser======", currUser);
  const [listingData, setListingData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    username: currUser,
  });
  const [file, setFiles] = useState();

  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setListingData((listingData) => ({
      ...listingData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('listingData in handlesubmit= ', listingData);
    evt.preventDefault();
    const listingFormData = new FormData();
    listingFormData.append('photo', file);
    console.log('listingFORMData in handlesubmit=>>>>> ', listingFormData);
    for (let field in listingData) {
      listingFormData.append(field, listingData[field]);
    }
    await addListing(listingFormData);
    history.push('/listings');
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="listing-title">Title: </Form.Label>
          <Form.Control

            name="title"
            value={listingData.title}
            id="listing-title"
            type="text"
            placeholder="title"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="listing-description">Description: </Form.Label>
          <Form.Control

            name="description"
            value={listingData.description}
            id="listing-description"
            type="text"
            placeholder="description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="listing-price">Price: </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="price"
            value={listingData.price}
            id="listing-price"
            type="price"
            placeholder="price"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="listing-location">location: </Form.Label>
          <Form.Control

            name="location"
            value={listingData.location}
            id="listing-location"
            type="location"
            placeholder="location"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="listing-photo"></Form.Label>
          <Form.Control
            id="listing-photo"
            name="photo"
            type="file"
            onChange={() => setFiles(inputRef.current.files[0])}
            ref={inputRef}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default NewListingForm;
