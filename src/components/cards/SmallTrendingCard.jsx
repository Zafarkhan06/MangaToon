import ReadOnlyRatings from "./ReadOnlyRatings";
export default function SmallTrendingCard(props) {
  return (
    <section>
      <div className="flex flex-row  gap-2 items-start text-white bg-[#222222]">
        <div className="w-1/3 object-contain object-center">
          <img
            src={props.src}
            className="h-32"
            alt="smallcardmangfa"
          />
        </div>
        <div className="w-2/3">
          <p className="text-xl font-semibold font-Finlandica mb-1">
            {props.title}
          </p>
          <p className="text-lg font-medium mb-1 text-gray-300">
            Genres:
            <span className="text-white text-base font-medium">
              {props.genre}
            </span>
          </p>
          <div className="pt-0 mt-0">
            <ReadOnlyRatings value={props.rating}/>
          </div>
        </div>
      </div>
    </section>
  );
}
