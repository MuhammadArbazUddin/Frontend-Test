import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    axios
      .get("https://66c3908ad057009ee9c0a84e.mockapi.io/api/v1/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError("Failed to fetch books, please try again.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchQuery !== "") {
      setSearching(true);
      setTimeout(() => setSearching(false), 500);
    }
  }, [searchQuery]);

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-500 drop-shadow-sm">
        Book List 📚
      </h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-lg w-full mb-8 border-0 px-4 py-2 transition-all duration-200 font-sans 
        outline-2 outline-offset-3 outline-yellow-500  
        focus:outline-offset-5"
      />

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500"></div>
        </div>
      ) : selectedBook ? (
        <div className="max-w-lg flex flex-col mx-auto p-6 bg-white rounded-md border border-yellow-500">
          <h2 className="text-2xl font-semibold text-gray-800">
            {selectedBook.name}
          </h2>
          <p className="text-lg text-gray-600 mb-3">
            {selectedBook.authorName}
          </p>
          <img
            src={selectedBook.avatar}
            alt={selectedBook.name}
            className="w-full h-52 object-cover rounded-md"
          />
          <button
            onClick={() => setSelectedBook(null)}
            className="mt-4  bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 hover:cursor-pointer transition"
          >
            Back
          </button>
        </div>
      ) : (
        <div>
          {searching ? (
            <div className="text-center text-gray-600">Searching...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="bg-white p-4 rounded-lg border border-gray-100 cursor-pointer hover:border-yellow-500 transition group"
                >
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={book.avatar}
                      alt={book.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-3">
                    {book.name}
                  </h3>
                  <p className="text-gray-600">{book.authorName}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
