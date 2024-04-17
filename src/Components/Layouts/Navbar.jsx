import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='flex gap-2'>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-ghost btn-sm'}>About</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-ghost btn-sm'}>Contact</NavLink>
        <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-ghost btn-sm'}>Login</NavLink>
       </div>
    );
};

export default Navbar;