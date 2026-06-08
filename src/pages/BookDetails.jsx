import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import '../styles/index.css'
export default function BookDetails() {
  const { id } = useParams();

  const selectedBook = useSelector((store) =>
    store.book.items.find(
      (book) => book.id === Number(id)
    )
  );

  if (!selectedBook) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <div className="book-details">
      <div className="book-details-container">
        
        {/* Book Cover */}
        <div className="book-cover">
          <img
            src={"https://placehold.co/350x500/f97316/ffffff?text=Book+Cover"}
            alt={selectedBook.title}
          />
        </div>

        {/* Book Information */}
        <div className="book-info">
          <span className="book-badge">
            {selectedBook.category}
          </span>

          <h1>{selectedBook.title}</h1>

          <h3>{selectedBook.author}</h3>

          <div className="book-rating">
            ⭐ {selectedBook.rating} / 5
          </div>

          <p className="book-description">
            {selectedBook.description}
          </p>

          {/* Primary Actions */}
          <div className="primary-actions">
            <button>📖 Read Now</button>
            <button>🛒 Buy Book</button>
            <button>🎧 Audio Version</button>
          </div>

          {/* Secondary Actions */}
          <div className="secondary-actions">
            <button>🔖 Bookmark</button>
            <button>❤️ Favorite</button>
            <button>⭐ Reviews</button>
            <button>📝 Write Review</button>
            <button>📚 Similar Books</button>
            <button>🔗 Share</button>
            <button>📤 Recommend</button>
          </div>
        </div>
      </div>
    </div>
  );
}