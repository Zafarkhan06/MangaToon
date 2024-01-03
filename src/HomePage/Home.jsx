import NavigationBar from "../components/NavigationBar/Navigation";
import FirstSlider from "../components/NavigationBar/Slider/FirstSlider";
import slidesData from "../components/NavigationBar/Slider/carouselData.json";
import TrendingCard from "../components/cards/TrendingCard";
export default function Home() {
  return (
    <section>
      <div>
        <NavigationBar></NavigationBar>
        <div className="px-20 flex flex-row items-center gap-5 justify-start">
          <FirstSlider slides={slidesData.slides} />
          <TrendingCard />
        </div>
      </div>
    </section>
  );
}
