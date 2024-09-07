import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
}

const Slider: React.FC = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const result = await GlobalApi.getTrendingMovies;
      setMovieList(result.data.results);
    })();
  }, []);
  const slideRight = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft += screenWidth - 110;
    }
  };

  const slideLeft = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft -= screenWidth - 110;
    }
  };

  return (
    <div className="relative">
      <HiChevronLeft
        onClick={() => slideLeft(sliderRef.current)}
        className="hidden md:block text-white text-[30px] absolute left-0 mx-8 mt-[185px] cursor-pointer"
      />
      <HiChevronRight
        onClick={() => slideRight(sliderRef.current)}
        className="hidden md:block text-white text-[30px] absolute right-0 mx-8 mt-[185px] cursor-pointer"
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={sliderRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full h-[370px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
