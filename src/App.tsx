import GenereMovieList from "./components/GenereMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

export default function App() {
  return (
    <div className="min-h-[100%]">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenereMovieList />
    </div>
  );
}
