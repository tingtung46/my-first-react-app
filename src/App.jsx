import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the App!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile/name">Profile page</Link>
          </li>
          <li>
            <Link to="profile/popeye">Popeye page</Link>
          </li>
          <li>
            <Link to="profile/spinach">Spinach page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
