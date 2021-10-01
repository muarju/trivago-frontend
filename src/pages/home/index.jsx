import React from 'react';
import logo from '../../assets/img/trivago.svg'
import './style.css'
import TopNavbar from '../../components/navbar'
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";

const Home = () => {
  const token= Cookies.get('token')
  let userDatails;
  if(token){
    userDatails=jwt_decode(token)
  }




    return (
        <div>
              <TopNavbar />
            <div className="container">
            <div className="hero row">
                <div className="col-2"><img className="hero-logo" src={logo} alt="Trivago" /></div>
                <div className="col-10">
         {userDatails ? <h1>Welcome back {userDatails.name}</h1>:<></>}
                <h1 class="hero__title">Deals from your favorite booking sites. All in one place.<span class="hero__subtitle">Try searching for a city, a specific hotel, or even a landmark!</span></h1>
                </div>
            </div>
            </div>
            <div className="container-fluid bg-light" style={{minHeight: "30vh"}}>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
            </div>
        </div>
        
    );
}

export default Home;
