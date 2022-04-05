import React, { useEffect, useState } from 'react'
import './styles.css'
import LoginImage from '../../media/account.png'
import { useDispatch } from 'react-redux';
import { fetchUsersFailed, fetchUsersSuccess, setUsers, startFetchUsers } from '../../actions/users';
import http from '../../services/axios';
import { authStart, authSuccess } from '../../actions/auth';

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(startFetchUsers());
        http.get('users')
            .then(res => {
                dispatch(fetchUsersSuccess());
                dispatch(setUsers(res.data));
            })
            .catch(error => dispatch(fetchUsersFailed(error)));
    }, []);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authStart());
        let data = JSON.stringify({
            email: email,
            password: password
        });
        http.post(`login`, data).then(res => {
            dispatch(authSuccess(res.data.token, 5));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', 5);
        })
    }

    return (
        <main className='d-flex align-items-center vh-100'>
            <div className='form-signin text-center'>
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src={LoginImage} alt="" width="92" />
                    <h1 className="h3 fw-bolder mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input onInput={handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onInput={handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="mb-3">
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2022</p>
                </form>
            </div>
        </main>
    )
}