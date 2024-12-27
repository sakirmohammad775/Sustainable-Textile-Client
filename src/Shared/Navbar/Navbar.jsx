import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error))
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "LogOut",
      showConfirmButton: false,
      timer: 1500
    });

  }
  const navOptions =
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/ourProducts">Our Products</Link></li>
      <li><Link to="/blogPage">Blogs</Link></li>
      <li><Link to="/order/nylon">Order</Link></li>
      <li><Link to="/contactUs">Contact Us</Link></li>
    </>

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 max-w-screen-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
          ) : (
            <li><Link className="btn btn-ghost" to="/signIn">SignIn</Link></li>
          )}
        </div>
      </div>
    </>
  );

}
export default Navbar;