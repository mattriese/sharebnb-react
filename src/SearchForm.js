import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
 * SearchForm component
 *
 * Props: handleSearch (function)
 * 				initialSearchTerm (string)
 *
 * State: searchTerm
 *
 * CompanyList / JobList -> SearchForm
 */
function SearchForm({ initialSearchTerm, handleSearch }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('searchTerm in handlesubmit= ', searchTerm);
    evt.preventDefault();
    handleSearch(searchTerm);
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="searchBox"></Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          value={searchTerm}
          id="searchBox"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </Form.Group>
      <Button >search</Button>
    </Form>
  );
}

export default SearchForm;
