import BushaLogo from './busha'
const Navbar = () => {
    return ( <nav className="navbar">
    <div className="navbar-container container">
      <BushaLogo />
      <ul className="menu-items">
       <span className="dot">O</span>
        <li>Oluwatobi Akindunjoye</li>
      </ul>
    </div>
  </nav>
   );
}
 
export default Navbar;