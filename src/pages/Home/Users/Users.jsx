import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination';
import User from './User';

export default function Users() {
    const users = useSelector(state => state.users.users);

    return (
        <div className='row'>
            {
                users.map(user => {
                    return (
                        <User user={user} key={user.id} />
                    )
                })
            }
            <div className="col-12 p-2">
                <Pagination />
            </div>
        </div>
    )
}
