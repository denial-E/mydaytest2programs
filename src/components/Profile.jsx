import React, { useContext } from 'react';
import { myContext } from '../App';

const Profile = () => {
    const{userProfile,setuserProfile}=useContext(myContext)
    const handleSubmit=()=>{
        setuserProfile('Admin')
    }
    return (
        <div>
            <h1>profile Comp</h1>
            <h1>context Value:{userProfile}</h1>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default Profile;