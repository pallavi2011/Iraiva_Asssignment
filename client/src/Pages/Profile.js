import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import ProfileItem from './ProfileItem';


const Profile = ({token}) => {
    const [data, setData] = useState([]);
     
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [phone, setPhone] = useState('');
    useEffect(() => {
        const decode = jwt(token);
        const id =  decode.user.id;
        const res = axios.get(`http://localhost:5000/api/user/${id}`).then(res => {
            console.log(res.data.user);
            setData(res.data.user);
        })
        .catch(err => {
            console.log(err);
        })
       
        // setFirstname(data.firstname);
        // setLastname(data.lastname);
        // setEmail(data.email);
        // setAddress(data.address);
        // setPhone(data.phone);
            
       }, []);
        
    return (
       <section className="container">
        <h1 className="large text-primary">Profile</h1>
        <Fragment>
            <ProfileItem data={data}/>
        </Fragment>
        </section>
    )
}


export default Profile;
