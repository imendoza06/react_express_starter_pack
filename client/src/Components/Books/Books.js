import React, { Component } from "react";
import "./Books.css";

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch("/api/books")
      .then(res => res.json())
      .then(books =>
        this.setState({ books }, () => console.log("Books fetched...", books))
      );
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>Current Readings</h2>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Books;
