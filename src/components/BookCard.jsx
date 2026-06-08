import { Link } from "react-router";
import "../styles/index.css";
function BookCard(props) {
  return (
    <div className="book-card">
      <img src={props.book.image} alt="" className="book-image"/>
      <h3 className="book-title">{props.book.title}</h3>

      <p className="book-author">{props.book.author}</p>

      <p className="book-category">Category: {props.book.category}</p>

      <p className="book-rating">⭐ {props.book.rating}</p>
      <Link to={`/book/${props.book.id}`}>
        <button className="details-btn">View Details</button>
      </Link>
    </div>
  );
}

export default BookCard;
