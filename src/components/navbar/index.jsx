import React from 'react';
import logo from '../../assets/img/trivago.svg'
import {Link} from 'react-router-dom'
import './style.css'
import Cookies from 'js-cookie'

const TopNavbar = () => {
    const token = Cookies.get('token')





    return (
        <div className="container-fluid">
                <div className="row top-bar">
                    <div className="col-1">
                    <a className="navbar-brand" href="/"><img src={logo} className="logo" alt="trivago" /></a>
                    </div>
                    <div className="col-7">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white ml-5">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                <svg className="svg20" xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" focusable="false" tabindex="-1"><g fill="none" fill-rule="evenodd"><path className="svg-color--primary" d="M-2-5h24v24H-2z"></path><path className="svg-color--secondary" fill="#1391d2" d="M19 12c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V8h18v4zM2.09 6.41c.14-.54.47-.98.91-1.21.23-.13.48-.2.75-.2h3.5c.64 0 1.21.4 1.51 1 .15.29.24.64.24 1H2c0-.21.03-.41.09-.59zM3 1h14v3.12c-.24-.08-.49-.12-.75-.12h-3.5c-1.2 0-2.21.84-2.59 2-.1.31-.16.65-.16 1 0-.35-.06-.69-.16-1-.38-1.16-1.39-2-2.59-2h-3.5c-.26 0-.51.04-.75.12V1zm8.24 5c.3-.6.87-1 1.51-1h3.5c.27 0 .52.07.75.2.44.23.77.67.91 1.21.06.18.09.38.09.59h-7c0-.36.09-.71.24-1zM19 7c0-.93-.39-1.76-1-2.31V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.69C1.39 5.24 1 6.07 1 7c-.55 0-1 .45-1 1v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.55-.45-1-1-1z"></path></g></svg>
                                    <span className="active">Stays</span>
                                    <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                <svg className="svg20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 5a4 4 0 104 4 4 4 0 00-4-4zm0 7a3 3 0 113-3 3 3 0 01-3 3z"></path><path d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09L7 12.28l4.15 8.21a1 1 0 001.74 0L17 12.28l.6-1.19A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 20l-4.7-9.31A4.77 4.77 0 017 9a4.88 4.88 0 010-.64 5 5 0 019.92 0A5.14 5.14 0 0117 9a4.77 4.77 0 01-.3 1.69z"></path></g></svg>
                                    <span>Weekend</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                <svg className="svg20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19,11h0a.93.93,0,0,0-.06-.37L17.18,6.26A2,2,0,0,0,15.32,5H8.68A2,2,0,0,0,6.82,6.26L5.07,10.63A.93.93,0,0,0,5,11H5a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2v1a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V18h6v1a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V18a2,2,0,0,0,2-2V13A2,2,0,0,0,19,11ZM7.75,6.63A1,1,0,0,1,8.68,6h6.64a1,1,0,0,1,.93.63L18,11H6ZM8,19H6V18H8Zm10,0H16V18h2Zm2-3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z" fill="currentColor"></path><circle cx="7" cy="14" r="1" fill="currentColor"></circle><circle cx="17" cy="14" r="1" fill="currentColor"></circle></svg>
                                    <span>Cars</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                <svg className="svg20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.39,12.08,14,9.3V5c0-.64-.5-3-2-3s-2,2.36-2,3V9.3L3.61,12.08A1,1,0,0,0,3,13v1a1,1,0,0,0,.34.76A1.07,1.07,0,0,0,4,15h.14L10,14.13v2.34l-2.55,1.7A1,1,0,0,0,7,19v1a1,1,0,0,0,.47.85A1,1,0,0,0,8,21a1,1,0,0,0,.45-.11L12,19.12l3.55,1.77A1,1,0,0,0,16,21a1,1,0,0,0,.53-.15A1,1,0,0,0,17,20V19a1,1,0,0,0-.45-.83L14,16.47V14.13l5.86.86H20a1.07,1.07,0,0,0,.66-.24A1,1,0,0,0,21,14V13A1,1,0,0,0,20.39,12.08ZM20,14l-7-1v4l3,2v1l-4-2L8,20V19l3-2V13L4,14V13l7-3V5c0-.55.45-2,1-2s1,1.45,1,2v5l7,3Z" fill="currentColor"></path></svg>
                                    <span>Flight</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                <svg className="svg20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path></svg>
                                    <span>Packages</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                    <div className="col-4">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white float-right">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                   {token ? <Link className="nav-link" as={Link} to="/logout">Logout</Link>: <Link className="nav-link" as={Link} to="/login">Login</Link>}             
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               Menu
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Recently Viewed</a>
                                <a className="dropdown-item" href="/">Booking Overview</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               USD
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">GBP</a>
                                <a className="dropdown-item" href="/">EURO</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               EN
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">PT</a>
                                <a className="dropdown-item" href="/">FR</a>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                </div>
        </div>
    );
}

export default TopNavbar;
