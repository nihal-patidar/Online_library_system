import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BookCard from "../components/BookCard";
import CategorySelector from "../components/CategorySection";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

export default function BrowseBooks() {
  const books = useSelector((store) => store.book.items);
  const { category } = useParams();

  const [search , setSearch] = useState(null);
  
  const filteredBooks = books.filter((book) => {

    const categoryMatches = category ? book.category.toLowerCase() === category.toLowerCase() : true ;



    const searchMatches = search ? (book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())) : true ;


    return categoryMatches && searchMatches ;
  })

  return (
    <div className="browse_books">
        <SearchBar onSearch={setSearch}/>
        <CategorySelector />
      <section className="books-container">

        {
            filteredBooks.length > 0 ?  filteredBooks.map(book => {
                return <BookCard key={book.id} book={book} />
            }) : <h1> No book Found</h1>
        }
        
      </section>
    </div>
  )
}
