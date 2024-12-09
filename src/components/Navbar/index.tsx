import "./style.scss";

const styles = {
  navStyle: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: "1.4rem",
    margin:30
  },
};

interface IProps {
  logo: string;
  aboutTxt: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}
const Navbar = ({ logo, aboutTxt, isLoggedIn, setIsLoggedIn }: IProps) => {
  return (
    <nav>
      <ul style={styles.navStyle}>
        <li>
          <a href="/">{logo}</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">{aboutTxt.toUpperCase()}</a>
        </li>
        <li>
          <button
            className="log"
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
