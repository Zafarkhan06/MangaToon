import Card from "react-bootstrap/Card";
export default function TrendingCard() {
  return (
    <div className="w-96 h-80">
      <Card className=" text-white bg-dark">
        <Card.Img
          className="h-80  object-center opacity-45 object-cover"
          src="/images/666mangaPoster.webp"
        />
        <Card.ImgOverlay className="flex flex-col items-center justify-center">
          <Card.Title className="text-center text-2xl font-semibold font-Finlandica">
            MangaToon Trending (This Week)
          </Card.Title>
          <h2 className="text-center text-3xl font-bold ">
            Solo Max Level Newbie
          </h2>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
