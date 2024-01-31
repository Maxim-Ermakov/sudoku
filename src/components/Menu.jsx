import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        < div className='container d-flex min-vh-100' >
            <h1>Sudoku</h1>
            <NavLink to='game' className='btn'>Play</NavLink>
        </div >
    )
}

export default Menu