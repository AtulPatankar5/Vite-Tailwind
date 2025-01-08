import { useState } from 'react'
import { Link } from 'react-router-dom'

function getUser() {
    let user = localStorage.getItem('user');

    if (user) {
        user = JSON.parse(user);
    }
    else {
        user = null;
    }
    return user
}

export const Dashboard = () => {
    const [user, setUser] = useState(getUser());


    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null);
    }

    return (
        <div>
            <div >

                <h1>Dashboard</h1>
            </div>
            <div>

                {user ? (
                    <>
                        <h4>Hello, {user}</h4>
                        <button onClick={handleLogout}>Logout</button>
                    </>

                ) : (
                    <Link to="/">Login</Link>
                )}
            </div>

        </div>
    )
}
