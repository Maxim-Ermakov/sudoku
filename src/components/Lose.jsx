import { NavLink } from "react-router-dom"

const Lose = () => {
    return (
        < div className='container d-flex min-vh-100' >
            <h1>Game over</h1>
            <NavLink to='/' className='btn'>Menu</NavLink>
        </div >
    )
}

export default Lose