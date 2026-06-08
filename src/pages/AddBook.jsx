import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addBook } from "../redux/bookSlice";

import "../styles/index.css";

export default function AddBook() {
  // Redux dispatch
  const dispatch = useDispatch();

  // Navigation after successful submission
  const navigate = useNavigate();

  // Validation errors
  const [errors, setErrors] = useState({});

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Validate form fields
  function validate() {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (
      !formData.rating ||
      Number(formData.rating) < 1 ||
      Number(formData.rating) > 5
    ) {
      newErrors.rating = "Rating must be between 1 and 5";
    }

    return newErrors;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    // Stop submission if errors exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    // Create new book object
    const id = Date.now();

    const newBook = {
      id,

      title: formData.title,
      author: formData.author,
      category: formData.category,
      description: formData.description,

      rating: Number(formData.rating),

      image: `https://picsum.photos/seed/book-${id}/300/450`,

      pages: 250,
      language: "English",
      publishedYear: new Date().getFullYear(),
      publisher: "Library Publications",

      reviews: 0,
      price: "$9.99",
      isbn: `978-${id}`,
    };

    // Add book to Redux store
    dispatch(addBook(newBook));

    // Redirect to Browse Books page
    navigate("/books");
  }

  return (
    <div className="add-book-page">
      <div className="form-container">
        <h1>Add New Book</h1>

        <form onSubmit={handleSubmit}>
          {/* Book Title */}
          <div className="form-group">
            <label>Book Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter book title"
              value={formData.title}
              onChange={handleChange}
            />

            {errors.title && <span className="error">{errors.title}</span>}
          </div>

          {/* Author */}
          <div className="form-group">
            <label>Author</label>

            <input
              type="text"
              name="author"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleChange}
            />

            {errors.author && <span className="error">{errors.author}</span>}
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>

              <option value="Fiction">Fiction</option>

              <option value="Non-Fiction">Non-Fiction</option>

              <option value="Sci-Fi">Sci-Fi</option>

              <option value="Fantasy">Fantasy</option>

              <option value="Mystery">Mystery</option>

              <option value="Biography">Biography</option>

              <option value="Horror">Horror</option>
            </select>

            {errors.category && (
              <span className="error">{errors.category}</span>
            )}
          </div>

          {/* Rating */}
          <div className="form-group">
            <label>Rating (1 - 5)</label>

            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              name="rating"
              placeholder="4.5"
              value={formData.rating}
              onChange={handleChange}
            />

            {errors.rating && <span className="error">{errors.rating}</span>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              placeholder="Write a short description..."
              value={formData.description}
              onChange={handleChange}
            />

            {errors.description && (
              <span className="error">{errors.description}</span>
            )}
          </div>

          <button className="submit-btn" type="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
