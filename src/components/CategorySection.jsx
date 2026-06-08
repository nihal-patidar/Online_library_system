import { Link } from "react-router"
import React from "react"

export default function CategorySelector(){

    return (
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
    )
}