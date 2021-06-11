import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

/** SignupForm component
 *
 * Props: handleLoginOrSignup (function)
 *
 * State: signupData (object)
 *
 * Routes -> SignupForm
 */
function SignupForm({ handleSignup }) {
  const inputRef = useRef();
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    bio: '',
    location: '',
  });
  const [file, setFiles] = useState();

  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData((signupData) => ({
      ...signupData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('loginData in handlesubmit= ', signupData);
    evt.preventDefault();
    const signupFormData = new FormData();
    signupFormData.append('file', file)

    for (let field in signupData) {
        signupFormData.append(field, signupData[field]);
    }
    await handleSignup(signupFormData);
    history.push('/');
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="signup-username">Username: </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="username"
            value={signupData.username}
            id="signup-username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-email">Email: </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="email"
            value={signupData.email}
            id="signup-email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-password">Password: </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="password"
            value={signupData.password}
            id="signup-password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-bio">Bio: </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="bio"
            value={signupData.bio}
            id="signup-bio"
            type="text"
            placeholder="bio"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-location">Location: </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="location"
            value={signupData.location}
            id="signup-location"
            type="text"
            placeholder="location"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-file"></Form.Label>
          <Form.Control
            id="signup-file"
            name="file"
            type="file"
            onChange={() => setFiles(inputRef.current.files[0])}
            ref={inputRef}
          />
        </Form.Group>
        <Button type="submit">upload</Button>
      </Form>
    </div>
  );
}

export default SignupForm;
