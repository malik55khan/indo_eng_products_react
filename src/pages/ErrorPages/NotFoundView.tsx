import React from 'react'
import { LoggedUserType } from '../../services/types';
import { Navigate } from 'react-router-dom';

const NotFoundView = () => {
    let loggedUser: LoggedUserType = JSON.parse(localStorage.getItem('loggedUser') || JSON.stringify({ jwt: '', role: '0' }));
    loggedUser.role = Number(loggedUser.role);
    if (!loggedUser.jwt) return <Navigate to="/" replace />
    if (loggedUser.role == 5) return <Navigate to="/admin" replace />
    if (loggedUser.role == 1) return <Navigate to="/seller" replace />
    return (
        <div>NotFoundView</div>
    )
}

export default NotFoundView