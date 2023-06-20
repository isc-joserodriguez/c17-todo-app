import { Link } from 'react-router-dom';

const Navbar = ({ links }) => {
  return (
    <header>
      <nav>
        <ul>
          {links
            .filter((link) => link.show)
            .map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
