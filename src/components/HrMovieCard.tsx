const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = (props: any) => {
  const { movie } = props;
  return (
    <div className="shrink-0 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[2px] border-gray-400 shadow-xl shadow-gray-800"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
    </div>
  );
};

export default HrMovieCard;
