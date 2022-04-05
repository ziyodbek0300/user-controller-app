import React from 'react'
import './styles.css'
import LoginImage from '../../media/account.png'

export default function SignUp() {
    return (
        <main className='d-flex align-items-center vh-100'>
            <div className='form-signin text-center'>
                <form>
                    <img className="mb-4" src={LoginImage} alt="" width="92" />
                    <h1 className="h3 fw-bolder mb-3 fw-normal">Please sign up</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingIn" placeholder="name@example.com" />
                        <label htmlFor="floatingIn">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPass" placeholder="Password" />
                        <label htmlFor="floatingPass">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        {/* <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label> */}
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">© 2022</p>
                </form>
            </div>
        </main>
    )
}