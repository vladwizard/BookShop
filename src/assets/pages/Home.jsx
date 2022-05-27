import React from "react";
import BookParagraph from "../components/BookParagraph";
import bookJSON from "../books.json"
const bookList = new Array(...bookJSON);

export default function Home(props) {
    return (
        <div className="container">
            {
                bookList.filter((x) => (x.title.toLowerCase().includes(props.find.toLowerCase())) || (x.author.toLowerCase().includes(props.find.toLowerCase())))
                    .map((book, i) => {
                        return <BookParagraph book={book} key={i}/>
                    })
            }
        </div>
    )
}
