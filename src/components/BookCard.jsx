import '../styles/BookCard.css'
function BookCard(props) {
  return (
    <div className="book-card">
      <h3 className="book-title">{props.book.title}</h3>

      <p className="book-author">
        {props.book.author}
      </p>

      <p className="book-category">
        Category: {props.book.category}
      </p>

      <p className="book-rating">
        ⭐ {props.book.rating}
      </p>

      <button className="details-btn">
        View Details
      </button>
    </div>
  );
}

export default BookCard;