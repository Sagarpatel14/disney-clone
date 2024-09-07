import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";

const MovieList = (props: any) => {
  const { genreId, index_ } = props;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [movieList, setMovieList] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const result = await GlobalApi.getMovieByGenreId(genreId);
      setMovieList(result.data.results);
    })();
  });

  const slideRight = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft += 500;
    }
  };

  const slideLeft = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft -= 500;
    }
  };

  return (
    <div>
      <HiChevronLeft
        onClick={() => slideLeft(sliderRef.current)}
        className={`text-white font-bold text-3xl absolute cursor-pointer ${
          index_ % 3 === 0 ? "mt-[104px]" : "mt-44"
        } z-10 hidden md:block`}
      />
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth transition-all ease-in-out p-10"
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 === 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <HiChevronRight
        onClick={() => slideRight(sliderRef.current)}
        className={`text-white text-3xl absolute right-0 cursor-pointer ${
          index_ % 3 === 0 ? "-mt-[180px]" : "-mt-52"
        } mr-8 z-10 hidden md:block`}
      />
    </div>
  );
};

export default MovieList;
