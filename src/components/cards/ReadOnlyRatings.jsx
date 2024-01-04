import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function ReadOnlyRatings(props) {
  const [value, setValue] = React.useState(props.value);

  return (
    <Box className="flex ">
      <Rating className="mt-0 pt-0" precision={0.2} name="read-only"  value={value} readOnly />
      <p className="text-white pl-1">{props.value}</p>
    </Box>
  );
}
