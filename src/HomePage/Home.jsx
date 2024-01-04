import NavigationBar from "../components/NavigationBar/Navigation";
import FirstSlider from "../components/NavigationBar/Slider/FirstSlider";
import slidesData from "../components/NavigationBar/Slider/carouselData.json";
import TrendingCard from "../components/cards/TrendingCard";
import PopularTab from "../components/PopularTab/PopularTab";
export default function Home() {
  return (
    <section>
      <div>
        <NavigationBar />
        <div className="px-20 flex flex-row items-top gap-5 justify-start">
          <FirstSlider slides={slidesData.slides} />
          <TrendingCard />
          <div className="px-3 py-4 flex flex-col border border-red-700 justify-start rounded-lg bg-black items-start">
            <p className="text-white font-semibold text-xl">Popular</p>
            <PopularTab />
          </div>
        </div>
      </div>
    </section>
  );
}
