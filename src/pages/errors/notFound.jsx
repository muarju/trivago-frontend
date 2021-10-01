import React from 'react';
import "./style.css";
const NotFound = () => {
    return (
             <div class="page-error-wrapper">
                <div>
                    <h1 class="error-title">404</h1>
                    <h5 class="tx-sm-24 tx-normal">Oopps. The page you were looking for doesn't exist.</h5>
                </div>
            </div>
    );
}

export default NotFound;
