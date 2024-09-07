const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = (props: any) => {
  const { movie } = props;
  return (
    <div className="shrink-0">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[2px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer shadow-xl shadow-gray-800"
      />
    </div>
  );
};

export default MovieCard;
