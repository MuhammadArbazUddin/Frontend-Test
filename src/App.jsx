import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://66c3908ad057009ee9c0a84e.mockapi.io/api/v1/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch books, please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home books={books} loading={loading} error={error} />}
        />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </Router>
  );
};

export default App;
