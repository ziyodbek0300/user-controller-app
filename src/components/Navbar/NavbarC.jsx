import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Logo from '../../media/team.png'
import http from '../../services/axios';

export default function NavbarC() {
    const { token, userId } = useSelector(store => store.auth);
    const [authUser, setAuthUser] = useState({});

    useEffect(() => {
        http.get(`users/${userId}`)
            .then(res => {
                setAuthUser(res.data.data);
            })
    }, [userId]);

    return (
        <header className="p-3 mb-3 border-bottom bg-white shadow-sm sticky-top">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src={Logo} alt="logo" height='50' /> <span style={{ fontFamily: '"Fredoka", sans-serif' }} className='ms-2 fs-3 fw-bold'>Users</span>
                    </a>

                    <ul className="nav col-12 col-lg-auto ms-lg-auto justify-content-center pe-3">
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>

                    {token !== null && userId !== null
                        ? <div className="dropdown text-end">
                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={authUser.avatar} alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div> : "Login"}
                </div>
            </div>
        </header>
    )
}
