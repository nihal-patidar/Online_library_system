import { Link } from "react-router-dom";
import "../styles/index.css";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Fantasy",
  "Mystery",
  "Biography",
  "Horror",
];

export default function CategorySelector() {
  return (
    <section className="category-selector">
      <h3>Trending Categories</h3>

      <div className="category-pills">
        <Link to="/books" className="category-pill" key="all-books">
          All Books
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            to={`/books/${category}`}
            className="category-pill"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
