import './style.css'
import logo from '../../assets/img/trivago.svg'
import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-8">
                    <div className="box">
                        <div className="box-top">
                        <div className="back-arrow">
                        <Link className="nav-link" as={Link} to="/">
                        <svg style={{height:"25px",width:"25px"}} class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path></svg>
                        </Link>
                        </div>
                        <div className="login-logo">
                            <img src={logo} alt="Trivago" />
                        </div>
                        </div>
                        <div className="box-contain">
                            <h3 className="login-title">Welcome back!</h3>
                            <p>Enter your e-mail address to start</p>
                            <div className="row">
                                <div className="col-6">
                                    <form>
                                    <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <button type="submit" class="btn btn-info btn-lg btn-block">Login</button>
                                    </form>
                                </div>
                                <div className="col-6" style={{borderLeft: "1px solid #bfbfbf"}}>
                                    <div className="social-logins">
                                    <strong>Or use trivago with another account</strong>
                                    <a className="btn btn-block btn-outline-secondary btn-social" href="/">
                                    <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M4.432 12.086l-.696 2.6-2.544.053A9.955 9.955 0 0 1 0 10a9.95 9.95 0 0 1 1.118-4.599l2.266.415.992 2.252A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086z" fill="#FBBB00"></path><path d="M19.825 8.132a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71h-.001l-2.853-.146-.404-2.52a5.96 5.96 0 0 0 2.564-3.044H10.22V8.132h9.605z" fill="#518EF8"></path><path d="M16.26 17.798A9.958 9.958 0 0 1 10 20a9.998 9.998 0 0 1-8.808-5.261l3.24-2.653a5.946 5.946 0 0 0 8.57 3.045l3.258 2.667z" fill="#28B446"></path><path d="M16.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114L1.12 5.401A9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302z" fill="#F14336"></path></g></svg>
                                    <span>Continue with Google</span>
                                    </a>
                                    <a className="btn btn-block btn-outline-secondary btn-social" href="http://localhost:3003/users/auth/facebook">
                                    <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#3A559F" width="20" height="20" rx="2"></rect><path d="M16.91 5.865h-1.871c-.98 0-1.208.806-1.208 1.123l-.012 2.248h2.96c-.182 1.633-.358 3.009-.358 3.009h-2.602V20h-3.113v-7.755H8.058v-3.01h2.648V6.5c0-.466.415-3.5 3.817-3.5l2.387.109v2.756z" fill="#FFF"></path></g></svg>
                                    <span>Continue with Facebook</span>
                                    </a>
                                    <a className="btn btn-block btn-outline-secondary btn-social" href="/">
                                    <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path fill="000" d="M17.5 12.6c0-1.6.8-3 2.2-3.8-.8-1.2-2.2-1.9-3.7-2-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.9c-1.7.1-3.3 1-4.1 2.5C2.9 12.5 4.3 17 6 19.5c.8 1.2 1.8 2.5 3.1 2.5s1.8-.8 3.3-.8 2 .8 3.3.8c1.4 0 2.2-1.2 3-2.5.6-.9 1.1-1.8 1.4-2.8-1.6-.7-2.7-2.3-2.6-4.1z"></path><path fill="000" d="M14.9 5.2c.7-.9 1.1-2 1-3.2-1.1.1-2.2.7-2.9 1.5-.8.9-1.1 2-1.1 3.1 1.2 0 2.3-.5 3-1.4z"></path></svg>
                                    <span>Continue with Apple</span>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <p>Reminder: by signing up, you are agreeing to our Privacy policy and Terms of use.</p>
                        </div>
                    </div>
                    <footer>
                    <h2>Don't have an account yet?</h2>
                    <a className="btn btn-lg btn-outline-secondary btn-signup" href="/">Create an Account</a>
                    </footer>
                </div>
            </div>
            
        </div>
    );
}

export default Login;
