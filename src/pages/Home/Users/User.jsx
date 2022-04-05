import React from 'react'

export default function User({ user }) {
    return (
        <div className="col-md-6 col-lg-4 p-2">
            <div className='card shadow-sm border-0 border-bottom border-info'>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <div className='user_title'>{user.first_name + ' ' + user.last_name}</div>
                            <div className='user_email'>{user.email}</div>
                        </div>
                        <div className="card_img">
                            <img src={user.avatar} alt={`${user.first_name}_image`} className='rounded-circle' />
                        </div>
                    </div>
                        <button className='btn btn-outline-info'>Details</button>
                </div>
                <div className="card-footer bg-white text-secondary opacity-50">
                    <i className='bi bi-person-fill me-2'></i>
                    ID # {user.id}
                </div>
            </div>
        </div>
    )
}
