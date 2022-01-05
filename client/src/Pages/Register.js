import {Redirect} from 'react-router-dom';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [formData, setFormData] = useState({
      firstname: '',
      lastname:'',
      email: '',
      address:'',
      phone:'',
      password: '',
      
    });
  
    const { firstname, lastname, email, address, phone, password } = formData;
  
    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
    
    async function registerUser(e){
        e.preventDefault();
        const body = {firstname, lastname, email, address, phone, password};
        const newUser = JSON.stringify(body)
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const res = await axios.post('/api/register', newUser, config);

            setFormData({
                firstname: '',
                lastname:'',
                email: '',
                address:'',
                phone:'',
                password: '',

            });
            
            
        }catch(err){
            console.log(err.response.data);
        }

    }

    // if (isAuthenticated) {
    //   return <Redirect to="/profile" token={token}/>;
    // }
  
    return (
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={registerUser}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={firstname}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    );
  };
  

  export default Register;