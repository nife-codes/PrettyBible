import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bible">Bible</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
        <li><Link to="/wallpapers">Wallpapers</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
