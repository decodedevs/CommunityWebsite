import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articles = [
  {
    id: 1,
    title: "Breaking News: New Discoveries in Science",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "August 12, 2023",
    link: "#",
  },
  {
    id: 2,
    title: "Tech Innovations: Unveiling the Future",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "August 10, 2023",
    link: "#",
  },
  {
    id: 3,
    title: "Health Update: Wellness Tips for a Better Life",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "August 8, 2023",
    link: "#",
  },
  // Add more articles here
];

const Newsroom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // Enable vertical carousel
    verticalSwiping: true, // Enable vertical swiping
    adaptiveHeight: true, // Ensure slide height adjusts to content
  };

  return (
    <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text sm:text-4xl">Newsroom</h2>
        </div>
        <div className="col-span-2">
          <Slider {...settings}>
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-4"
              >
                <h2 className="text-lg md:text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-2">{article.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{article.date}</span>
                  <a
                    href={article.link}
                    className="text-blue-600 font-semibold hover:underline flex items-center"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
