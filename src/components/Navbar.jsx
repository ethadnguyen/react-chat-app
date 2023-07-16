import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import '../pages/Home/Home.scss';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <span className='logo'>Ethad box</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt="user" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;