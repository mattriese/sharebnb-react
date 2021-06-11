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
  const [listingData, setListingData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    listing_owner: currUser,
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
          <Form.Label htmlFor="signup-title">Title: </Form.Label>
          <Form.Control

            name="title"
            value={listingData.title}
            id="signup-title"
            type="text"
            placeholder="title"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-description">Description: </Form.Label>
          <Form.Control

            name="description"
            value={listingData.description}
            id="signup-description"
            type="text"
            placeholder="description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-price">Price: </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="price"
            value={listingData.price}
            id="signup-price"
            type="price"
            placeholder="price"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-location">location: </Form.Label>
          <Form.Control

            name="location"
            value={listingData.location}
            id="signup-location"
            type="location"
            placeholder="location"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-photo"></Form.Label>
          <Form.Control
            id="signup-photo"
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
