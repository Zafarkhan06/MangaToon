import PopularTodayCard from "../cards/PopularTodayCard";
import { useMediaQuery } from '@mui/material';

const PopularTodayData = [
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 5",
    chapter: "Chapter 123",
    rating: 4.5,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 6",
    chapter: "Chapter 713",
    rating: 3.8,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 7",
    chapter: "Chapter 137",
    rating: 4.0,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 8",
    chapter: "Chapter 14",
    rating: 4.2,
  },
 
];

export default function PopulartToday(props) {
  const matches = useMediaQuery('(max-width:960px)'); // Check if screen size is medium or smaller

  return (
    <section className="bg-[#222222] container text-white rounded-lg pb-2">
      <p className="pt-3 pl-5 font-bold text-2xl ">Popular</p>
      <hr className="text-white" />
      <div className="pt-2 px-4 flex container justify-between gap-2">
        {/* Map only the first two cards if screen size is md or sm */}
        {PopularTodayData.slice(0, matches ? 3 : PopularTodayData.length).map((data, index) => (
          <div key={index}>
            <PopularTodayCard
              src={data.src}
              title={data.title}
              rating={data.rating}
              chapter={data.chapter}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
