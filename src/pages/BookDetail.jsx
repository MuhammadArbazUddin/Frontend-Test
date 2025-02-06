import React from "react";
import { useParams, Link } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return <p className="text-center text-red-500">Book not found.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Book Details
        </h1>
        <img
          src={book.avatar}
          alt={book.name}
          className="w-64 h-64 object-cover rounded-lg shadow-md mb-6"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{book.name}</h2>
        <p className="text-lg text-gray-600 mb-4 font-medium">
          By {book.authorName}
        </p>
        <p className="text-gray-700 leading-relaxed max-w-xl">
          Book APi Has No Description Data So I Add Custom . Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officia natus enim obcaecati.
        </p>
        <Link
          to="/"
          className="mt-6 bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookDetail;
