import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'

const Logout = () => {
    const history = useHistory();
    Cookies.remove('token', { path: '' })
    history.push("/");
   
    return (
        <div>
            
        </div>
    );
}

export default Logout;
