
function ProfileForm() {
  return <div>profile form</div>
}

// import CurrUserContext from "./currUserContext";

// /** ProfileForm component
//  *
//  * Routes -> ProfileForm
//  */
// function ProfileForm() {
//   const [formData, setFormData] = useState({});

//   function handleSubmit(formData) {
//   }

//   function handleChange(evt) {
//     const { name, value } = evt.target;
//     setSignupData((signupData) => ({
//       ...signupData,
//       [name]: value,
//     }));
//   }


// return (
//   <div>
//   <strong>Username</strong>
//   <p>{CurrUserContext.username}</p>

//   <Form onSubmit={handleSubmit}>
//     <Form.Group>
//       <Form.Label htmlFor="update-firstName">First Name</Form.Label>
//       <Form.Control
//         className="mb-2 mr-sm-2"
//         name="firstName"
//         value={formData.firstName}
//         id="update-firstName"
//         type="text"
//         placeholder="firstName"
//         onChange={handleChange}
//       />
//     </Form.Group>
//     <Form.Group>
//       <Form.Label htmlFor="update-lastName"></Form.Label>
//       <Form.Control
//         className="mb-2 mr-sm-2"
//         name="lastName"
//         value={formData.lastName}
//         id="update-lastName"
//         type="text"
//         placeholder="lastName"
//         onChange={handleChange}
//       />
//     </Form.Group>
//     <Form.Group>
//       <Form.Label htmlFor="update-email"></Form.Label>
//       <Form.Control
//         className="mb-2 mr-sm-2"
//         name="email"
//         value={formData.email}
//         id="update-email"
//         type="email"
//         placeholder="email"
//         onChange={handleChange}
//       />
//       </Form.Group>
//       <Form.Group>
//       <Form.Label htmlFor="update-password"></Form.Label>
//       <Form.Control
//         className="mb-2 mr-sm-2"
//         name="password"
//         value={formData.password}
//         id="update-password"
//         type="password"
//         placeholder="password"
//         onChange={handleChange}
//         required
//       />
//         </Form.Group>
//         </Form>
//       </div>
//   )
// }

 export default ProfileForm;
