import { useSelector } from "react-redux"

export default function App(){

    const books = useSelector((store)=>store.book.items);
    console.log("books",books);

    return (
        <h1> Hello Nihal</h1>
    )
}