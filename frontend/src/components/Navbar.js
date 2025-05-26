import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Workout List</Link>
      <Link to="/schedule" style={styles.link}>Schedule</Link>
      <Link to="/settings" style={styles.link}>Settings</Link>
    </nav>
  );
};

export default Navbar;
