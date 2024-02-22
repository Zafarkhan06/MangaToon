import NavigationBar from "../components/NavigationBar/Navigation";
import FirstSlider from "../components/NavigationBar/Slider/FirstSlider";
import slidesData from "../components/NavigationBar/Slider/carouselData.json";
import TrendingCard from "../components/cards/TrendingCard";
import PopularTab from "../components/PopularTab/PopularTab";
import PopulartToday from "../components/PopularToday/PopularToday";
import LatestEpisodeMain from "../LatestEpisode/LatestEpisodeMain";
export default function Home() {
  return (
    <section className="bg-[#16151d]">
      
        <NavigationBar />
        <div className="container justify-center flex flex-col xl:flex-row items-top gap-3 ">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <FirstSlider slides={slidesData.slides} />
              <TrendingCard />
            </div>
            <div className=" mt-4 ">
              <PopulartToday />
            </div>
            <div className=" mt-4 ">
              <LatestEpisodeMain />
            </div>
          </div>

          <div className="px-3 py-4 flex flex-col max-h-[120rem]  justify-start rounded-lg bg-black items-start">
            <p className="text-white font-semibold text-xl">Popular</p>
            <PopularTab />
          </div>
        </div>
      
    </section>
  );
}
