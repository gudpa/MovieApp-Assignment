import back from "../assets/icons8-back-48.png";
import { useResolvedPath } from "react-router-dom";
import { Link } from "react-router-dom";
const Nav = () => {
  let resolved = useResolvedPath("/");
  return (
    <div className="nav-header">
      <div className="page-name">
        {window.location.pathname === "/" ? null : (
          <Link to="/">
            <img className="back-icon" src={back} alt="back icon" />
          </Link>
        )}
        <div>
          {window.location.pathname === "/" ? "Pop Movies" : "Movie details"}
        </div>
      </div>
      <div className="more-options">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;
