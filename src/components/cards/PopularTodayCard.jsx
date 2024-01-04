import Card from "react-bootstrap/Card";
import ReadOnlyRatings from "./ReadOnlyRatings";
function PopularTodayCard(props) {
  return (
    <Card style={{ width: "10rem" , marginBottom: '20px', backgroundColor: 'transparent', border: 'none'}}>
      <Card.Img
        className="h-48 object-cover object-center"
        variant="top"
        src={props.src}
      />
      <Card.Body className="mb-0 pb-0 text-white">
        <Card.Title className="mb-0">{props.title}</Card.Title>
        <Card.Text className="mb-1">
        {props.chapter}
        </Card.Text>
        <ReadOnlyRatings value={props.rating}/>
        
      </Card.Body>
    </Card>
  );
}

export default PopularTodayCard;
