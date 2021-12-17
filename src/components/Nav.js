import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/studio-ghibli-pop-up-cafe-fwx.jpg?itok=gr682a_F"
          width="50px"
          height="50px"
          alt="Still from My Neighbor Totoro"
        />
      </Link>
      <Link to="/movies">
        <p>Movies</p>
      </Link>
      <Link to="/people">
        <p>People</p>
      </Link>
      <Link to="/locations">
        <p>Locations</p>
      </Link>
    </nav>
  );
};

export default Nav;
