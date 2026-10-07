import { useTheme } from "../context/ThemeContext";

const Nav2 = () => {
  const { theme } = useTheme();

  return (
    <ul className="nav2">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Services</li>
      <li className="theme-label">{theme}</li>
    </ul>
  );
};

export default Nav2;
