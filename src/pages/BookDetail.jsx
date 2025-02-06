import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return <p className="text-center text-red-500">Book not found.</p>;
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Book Details
        </motion.h1>
        <motion.img
          src={book.avatar}
          alt={book.name}
          className="w-64 h-64 object-cover rounded-lg shadow-md mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{book.name}</h2>
        <p className="text-lg text-gray-600 mb-4 font-medium">
          By {book.authorName}
        </p>
        <p className="text-gray-700 leading-relaxed max-w-xl">
          Book API Has No Description Data So I Add Custom. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officia natus enim obcaecati.
        </p>
        <Link
          to="/"
          className="mt-6 bg-yellow-500 text-white hover:scale-105 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BookDetail;
