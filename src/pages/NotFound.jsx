import { Link, useLocation } from "react-router-dom";
import '../styles/index.css'
export default function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found">
      <div className="not-found-card">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Invalid Route:
        </p>

        <code>
          {location.pathname}
        </code>

        <Link
          to="/"
          className="home-btn"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}