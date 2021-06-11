import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class SharebnbApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${SharebnbApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getListing(handle) {
    let res = await this.request(`listings/${handle}`);
    return res.listing;
  }

  /** Get list of all companies
   *
   * accepts a string: searchTerm
   * returns: an array of company objects
  */
  static async getListings(searchTerm) {
    let res;
    if (searchTerm === "") {
      res = await this.request(`listings`);
    } else {
      res = await this.request(`listings`, { name: searchTerm });
    }
    return res.listings;
  }

  // /** Gets a list of all jobs
  //  *
  //  * accepts a string: searchTerm
  //  * returns: an array of job objects
  //  */
  // static async getJobs(searchTerm) {
  //   let res;
  //   if (searchTerm === "") {
  //     res = await this.request(`jobs`);
  //   } else {
  //     res = await this.request(`jobs`, { title: searchTerm });
  //   }
  //   return res.jobs;
  // }

  /** Login: Send authentication post request to api
   *
   * accepts an object loginData: {username, password}
   * returns token string
  */
  static async login(loginData) {
    //let res = await this.request('login', "POST", loginData)
    let res = await axios.post(`${BASE_URL}/login`, loginData)
    console.log("res.token after login", res.token);
    console.log("res after login", res)
    return res.data.token;
  }

  /** Signup: Send post request with new user info to api
   *
   * accepts object signupData: {username, password, firstName, lastName, email}
   * returns token
   */
  static async signup(signupData) {
    let res = await this.request("signup", "POST", signupData,         {
      'Content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    });
    return res.token;
  }

  // /** loginOrSignup: send data to backend to login or sign up
  //  *
  //  * accepts data object
  //  * returns token string
  //  */
  // static async loginOrSignup(data) {
  //   const endpoint = data.firstName ? "register" : "token";
  //   let res = await this.request(`auth/${endpoint}`, data, "POST");
  //   return res.token;
  // };

/** getUser: get request for individual user info
 *
 * accepts username
 * returns user object
 */
    static async getUser(username) {
      let res = await this.request(`users/${username}`);
      return res;
    }


  /** updateUser: patch request to update user info
   *
   * accepts user data object
   * returns
   */

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export { SharebnbApi };
