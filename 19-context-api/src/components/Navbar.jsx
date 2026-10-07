import Nav2 from "./Nav2";

// Ab Navbar ko theme ki zaroorat hi nahi:
// colors CSS variables se aate hain ([data-theme] ke hisaab se)
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Sheryians</h2>
      <Nav2 />
    </nav>
  );
};

export default Navbar;
