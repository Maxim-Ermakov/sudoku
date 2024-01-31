import { NavLink } from "react-router-dom"

const Won = () => {
    return (
        < div className='container d-flex min-vh-100' >
            <h1>You won!</h1>
            <NavLink to='/' className='btn'>Menu</NavLink>
        </div >
    )
}

export default Won