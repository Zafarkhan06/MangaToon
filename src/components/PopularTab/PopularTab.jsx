import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SmallTrendingCard from "../cards/SmallTrendingCard";

const WeeklydummyData = [
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 1",
    genre: "Action, Adventure",
    rating: 4.5,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 2",
    genre: "Drama, Romance",
    rating: 3.8,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 3",
    genre: "Sci-Fi, Thriller",
    rating: 4.0,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 4",
    genre: "Comedy",
    rating: 4.2,
  },
];

const MonthlydummyData = [
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 5",
    genre: "Action, Adventure",
    rating: 4.5,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 6",
    genre: "Drama, Romance",
    rating: 3.8,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 7",
    genre: "Sci-Fi, Thriller",
    rating: 4.0,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 8",
    genre: "Comedy",
    rating: 4.2,
  },
];

const AlldummyData = [
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 5",
    genre: "Action, Adventure",
    rating: 4.5,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 6",
    genre: "Drama, Romance",
    rating: 3.8,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 7",
    genre: "Sci-Fi, Thriller",
    rating: 4.0,
  },
  {
    src: "/images/666MangaPoster.webp",
    title: "Title 8",
    genre: "Comedy",
    rating: 4.2,
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function PopularTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sortDataByRating = (data) => {
    return data.sort((a, b) => b.rating - a.rating);
  };

  return (
    <Box sx={{ bgcolor: "#222222", width: 370, borderRadius: 2 }}>
      <AppBar position="static">
        <Tabs
          className="bg-[#333333]"
          value={value}
          onChange={handleChange}
          indicatorColor="black"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Weekly" {...a11yProps(0)} />
          <Tab label="Monthly" {...a11yProps(1)} />
          <Tab label="All" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div>
        <TabPanel value={value} index={0}>
          {sortDataByRating(WeeklydummyData).map((data, index) => (
            <div key={index}>
              <SmallTrendingCard
                src={data.src}
                title={data.title}
                genre={data.genre}
                rating={data.rating}
              />
              {index !== WeeklydummyData.length - 1 && (
                <hr className="text-white" />
              )}
            </div>
          ))}
        </TabPanel>
      </div>

      <div>
        <TabPanel value={value} index={1}>
          {sortDataByRating(MonthlydummyData).map((data, index) => (
            <div key={index}>
              <SmallTrendingCard
                src={data.src}
                title={data.title}
                genre={data.genre}
                rating={data.rating}
              />
              {index !== WeeklydummyData.length - 1 && (
                <hr className="text-white" />
              )}
            </div>
          ))}
        </TabPanel>
      </div>
      <div>
        <TabPanel value={value} index={2}>
          {sortDataByRating(AlldummyData).map((data, index) => (
            <div key={index}>
              <SmallTrendingCard
                src={data.src}
                title={data.title}
                genre={data.genre}
                rating={data.rating}
              />
              {index !== WeeklydummyData.length - 1 && (
                <hr className="text-white" />
              )}
            </div>
          ))}
        </TabPanel>
      </div>
    </Box>
  );
}
