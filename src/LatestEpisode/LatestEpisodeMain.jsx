import { Stack } from "@mui/material";
import img from "../images/666MangaPoster.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const chapter = [
  { id: 1, name: "Chapter 1", time: "10 hours ago" },
  { id: 2, name: "Chapter 2", time: "12 hours ago" },
  { id: 3, name: "Chapter 3", time: "16 hours ago" },
];
export default function latestEpisodeMain() {
  return (
    <section className="bg-[#222]  rounded-lg min-h-screen">
      <div>
        <p className="pt-3 pl-6 text-white bg-[#22222] font-bold text-2xl ">
          Latest Update
        </p>
        <hr className="text-white mb-4" />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 text-white px-4 container justify-between items-center">
        <div className="flex items-start gap-2 w-full">
          <div className="w-1/3">
            <img src={img} className="w-[90%] rounded-md object-cover object-center" alt="smallcardmangfa" />
          </div>
          <div className="w-2/3">
            <h2 className="mb-4">The Reaper Moon</h2>
            {chapter.map((item) => (
              <div
                key={item.id}
                className="flex my-0 py-0 justify-between items-center"
              >
                <div className="flex items-start gap-2">
                  <PlayArrowIcon sx={{ width: "16px", color: "#faaf00" }} />
                  <p>{item.name}</p>
                </div>
                <p>{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2nd card  */}

        <div className="flex items-start gap-2 w-full">
          <div className="w-1/3">
            <img src={img} className="w-[90%] object-cover object-center rounded-md" alt="smallcardmangfa" />
          </div>
          <div className="w-2/3">
            <h2 className="mb-4">The Reaper Moon</h2>
            {chapter.map((item) => (
              <div
                key={item.id}
                className="flex my-0 py-0 justify-between items-center"
              >
                <div className="flex items-start gap-2">
                  <PlayArrowIcon sx={{ width: "16px", color: "#faaf00" }} />
                  <p>{item.name}</p>
                </div>
                <p>{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-white mb-4 mx-4 mt-4" />
    </section>
  );
}
