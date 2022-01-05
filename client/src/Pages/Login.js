import {Redirect} from 'react-router-dom';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Login = () => {
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    let history = useHistory();
    
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      
    });
  
    const { email, password } = formData;
  
    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
    
    
    async function loginUser(e){
        e.preventDefault();
        const body = {email, password};
        const user = JSON.stringify(body)
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const res = await axios.post('/api/login', user, config);
            const token = res.data.token;
            localStorage.setItem('token', token);
            
            if(token){
                history.push("/profile")
            }
            else{
                history.push("/login")
            }
            

            
            
        }catch(err){
            console.log(err);
        }

    }
  
    return (
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
       
        <form className="form" onSubmit={loginUser}>
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
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    );
  };
  

  export default Login;