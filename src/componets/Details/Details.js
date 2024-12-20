import React, { useState } from 'react';
import './Details.css';

const books = [
  {
    id: 1,
    title: 'El Amor en los Tiempos del Cólera',
    author: 'Gabriel Garcia Marquez',
    price: '$69000',
    image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/96/2a/962a2176af9fc9b9c89b567f1f7548e8.jpg',
  },
  {
    id: 2,
    title: 'Paraiso Travel',
    author: 'Jorge Franco',
    price: '$41400',
    image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b3/e0/b3e02aaa4be213b7690cff7b7917c18c.jpg',
  },
  {
    id: 3,
    title: 'Viaje al Final del Paraiso',
    author: 'Oscar Pinochet De La Barra',
    price: '$140000',
    image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/87/e2/87e296100f2fc1d0a8b7ea0d415b4885.jpg',
  },
  {
    id: 4,
    title: 'El Tunel',
    author: 'Ernesto Sabato',
    price: '$70000',
    image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/1b/89/1b894384b151e0fb96bc2f4636a82fd4.jpg',
  },
  {
    id: 5,
    title: 'Una Corte de Alas y Ruina',
    author: 'Sarah J. Maas',
    price: '$89100',
    image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4c/cb/4ccb9141593d19be41765429de111565.jpg',
  },
  {
    id: 6,
    title: 'Julio En Su Salsa',
    author: 'Tulio Zuloaga',
    price: '$62100',
    image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/af/de/afdecc4c56a417ba83ff0b2185212b58.jpg',
  },
  {
    id: 7,
    title: 'A traves de ti',
    author: 'Ariana Godoy',
    price: '$55800',
    image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/a3/8c/a38cebf9cc28e638c4db17106b67a756.jpg',
  },
];

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="app">
      <h1>Librería</h1>
      <div className="container">
        <BookList books={books} onBookSelect={setSelectedBook} />
        {selectedBook && <BookDetail book={selectedBook} />}
      </div>
    </div>
  );
}

function BookList({ books, onBookSelect }) {
  return (
    <div className="book-list">
      <h2>Lista de Libros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => onBookSelect(book)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookDetail({ book }) {
  return (
    <div className="book-detail">
      <h2>Detalle del Libro</h2>
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>Precio: {book.price}</p>
      <button>Comprar</button>
    </div>
  );
}

export default App;
