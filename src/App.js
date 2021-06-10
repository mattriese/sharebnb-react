import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'axios';
import './App.css';
import axios from 'axios';

function App() {
  const [signupData, setSignupData] = useState({
    file: null
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData((signupData) => ({
      ...signupData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      let resp = await axios.post("localhost:5000/", signupData);
      console.log("axios resp=", resp)
;    } catch (err) {
      console.warn("error= ", err);
    }
  }
  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>


        <Form.Group>
          <Form.Label htmlFor="signup-file"></Form.Label>
          <Form.Control
            id="signup-file"
            name="file"
            value={signupData.file}
            type="file"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">upload</Button>
      </Form>
    </div>
  );
}

export default App;


// username: '',
// email: '',
// password: '',
// bio: '',
// location: '',

// <Form.Group>
//         <Form.Label htmlFor="signup-username"></Form.Label>
//         <Form.Control
//           className="mb-2 mr-sm-2"
//           name="username"
//           value={signupData.username}
//           id="signup-username"
//           type="text"
//           placeholder="username"
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label htmlFor="signup-email"></Form.Label>
//         <Form.Control
//           className="mb-2 mr-sm-2"
//           name="email"
//           value={signupData.email}
//           id="signup-email"
//           type="email"
//           placeholder="email"
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label htmlFor="signup-password"></Form.Label>
//         <Form.Control
//           className="mb-2 mr-sm-2"
//           name="password"
//           value={signupData.password}
//           id="signup-password"
//           type="password"
//           placeholder="password"
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label htmlFor="signup-bio"></Form.Label>
//         <Form.Control
//           className="mb-2 mr-sm-2"
//           name="bio"
//           value={signupData.bio}
//           id="signup-bio"
//           type="text"
//           placeholder="bio"
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label htmlFor="signup-location"></Form.Label>
//         <Form.Control
//           className="mb-2 mr-sm-2"
//           name="location"
//           value={signupData.location}
//           id="signup-location"
//           type="text"
//           placeholder="location"
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
