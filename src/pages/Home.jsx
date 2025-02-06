import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = ({ books, loading, error }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="bg-[url('https://basecamplive.com/wp-content/uploads/2023/02/books.jpeg')] bg-cover bg-center py-16 p-6 mb-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-extrabold text-center mb-8 text-white">
            Book List
          </h1>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg text-black w-[500px] pl-10 pr-4 py-2 border-0 transition-all duration-200 font-sans 
            outline-2 outline-offset-3 outline-white bg-white focus:outline-offset-5"
            />
          </div>
        </div>
      </div>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="p-4"
          >
            {filteredBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <Link to={`/book/${book.id}`}>
                  <div className="bg-white p-4 border-4 border-black cursor-pointer transition group">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={book.avatar}
                        alt={book.name}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-800 mt-3">
                      {book.name}
                    </h3>
                    <p className="text-gray-600 text-2xl mt-1">
                      {book.authorName}
                    </p>
                    <button className="mt-4 bg-yellow-500 text-white text-2xl py-2 px-6 rounded-lg hover:bg-yellow-600 hover:cursor-pointer transition">
                      Read More
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Home;
