import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BookCard from "../components/BookCard";
import CategorySelector from "../components/CategorySection";
import SearchBar from "../components/SearchBar";

import "../styles/index.css";

export default function BrowseBooks() {
  // Get all books from Redux store
  const books = useSelector((store) => store.book.items);

  // Get category from URL
  const { category } = useParams();

  // Search query
  const [search, setSearch] = useState("");

  // Apply category and search filters
  const filteredBooks = books.filter((book) => {
    // Category filter
    const categoryMatches = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    // Search filter (title or author)
    const searchMatches = search
      ? book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      : true;

    return categoryMatches && searchMatches;
  });

  return (
    <div className="browse-books">
      <div className="browse-header">
        <h1>Browse Books</h1>
        <p>Find books by category, title, or author.</p>
      </div>

      <SearchBar onSearch={setSearch} />

      <CategorySelector />

      <section className="books-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))
        ) : (
          <div className="empty-state">
            <h2>No Books Found 📚</h2>
            <p>Try another category or search term.</p>
          </div>
        )}
      </section>
    </div>
  );
}