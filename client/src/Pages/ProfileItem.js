import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const ProfileItem = ({data}) => {
    const history = useHistory();

    const logout = () =>{
        localStorage.removeItem('token');
        history.push('/login');
    };
    return (
        <div>
            <Link className="btn btn-primary" onClick={logout}>Logout</Link>
            {data === null ? (<h1>No Profile created</h1>):(
            <Fragment>
                <div className='container'>
                <div className='details'>
                 <label>First Name :</label>{'  '}{data.firstname}</div>
                 <div className='details'><label>Last Name :</label>{'  '}{data.lastname}</div>
                 <div className='details'><label>Email :</label>{'  '}{data.email}</div>
                 <div className='details'><label>Address :</label>{'  '}{data.address}</div>
                 <div className='details'><label>Phone Number :</label>{'  '}{data.phone}</div>
                 </div>
            </Fragment>
                
            )}
           </div>
    )
}

export default ProfileItem;
