import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar py-4 navbar-expand justify-content-around align-items-center">
            <div className="logo">
                <Link to='/'><img src="/images/brand.png" className="brand" width="100" alt="" /></Link>
                <span className="fw-bolder fs-3">Foodie</span>
            </div>
            <div className="links">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="mx-2 nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link" to="">About</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link" to="">Foods</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link" to="/add-post">Add Post</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link" to="">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;