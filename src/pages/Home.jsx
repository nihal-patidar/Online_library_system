import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/index.css";

import CategorySelector from "../components/CategorySection";

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
      <CategorySelector />

      {/* Popular Books Section */}
      <section>
        <h2>Popular Books</h2>

        <div className="books-container">
          {books &&
            books.map((book) => {
              return book.rating > 4.5 ? <BookCard key={book.id} book={book} /> : null;
            })}
        </div>
      </section>
    </div>
  );
}

export default Home;
