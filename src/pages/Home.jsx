import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/Home.css";

function Home() {
  const books = useSelector((store) => store.book.items);
  return (
    <div className="home">
      {/* Hero Section */}
      <section>
        <h1>Welcome to Online Library</h1>
        <p>Discover thousands of books across different categories.</p>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Book Categories</h2>

        <div className="categories-grid">
          <Link to="/books/Fiction" className="category-card">
            📚 Fiction
          </Link>

          <Link to="/books/Non-Fiction" className="category-card">
            🧠 Non-Fiction
          </Link>

          <Link to="/books/Sci-Fi" className="category-card">
            🚀 Sci-Fi
          </Link>

          <Link to="/books/Fantasy" className="category-card">
            🏰 Fantasy
          </Link>

          <Link to="/books/Mystery" className="category-card">
            🔍 Mystery
          </Link>

          <Link to="/books/Biography" className="category-card">
            👤 Biography
          </Link>

          <Link to="/books/Horror" className="category-card">
            👻 Horror
          </Link>
        </div>
      </section>

      {/* Popular Books Section */}
      <section>
        <h2>Popular Books</h2>

        <div className="books-container">
          {books &&
            books.map((book) => {
              return book.rating > 4.5 ? <BookCard book={book} /> : null;
            })}
        </div>
      </section>
    </div>
  );
}

export default Home;
