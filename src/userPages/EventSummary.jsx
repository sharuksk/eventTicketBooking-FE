import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { Link, useParams } from "react-router-dom";
const EventSammary = () => {
  const { bookedId } = useParams();
  console.log("BookedId is :", bookedId);
  return (
    <>
      <Box>
        <img
          src="https://admine.q-tickets.com/Uploads/MediaSEO/Banner133645639487457205.webp"
          alt="Example"
        />
      </Box>

      <Box
        sx={{
          mt: 1,
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#D8D9DA",
          color: "black",
          borderRadius: "10px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Typography sx={{ fontSize: "2rem" }}>QATAR TOY FESTIVAL</Typography>
          <Typography variant="subtitle1">
            <CalendarTodayOutlinedIcon /> 15-07-2024 TO 14-08-2024
          </Typography>
          <Typography variant="subtitle1">
            <WatchLaterOutlinedIcon /> 02:00 PM ONWARDS
          </Typography>
          <Typography variant="subtitle1">
            <LocationOnOutlinedIcon /> DOHA
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to={"../event-ticket-purchase/" + bookedId}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, color: "white", width: "300px", height: "50px" }}
            >
              Book Now
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{ padding: "10px" }}>
        <Typography sx={{ fontSize: "2rem" }}>Summary</Typography>
        <Typography sx={{ fontSize: "1rem", marginBottom: 4 }}>
          This is a brief summary of the event. It provides an overview of what
          to expect and other relevant details. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestiae, fugit assumenda modi
          consequuntur dolores repellendus excepturi quaerat consectetur, ipsam
          ipsa laborum, nemo veniam hic magnam? Fugit, harum rem? Itaque
          exercitationem id cum tempora assumenda autem laudantium repellat
          aliquam optio magnam deleniti porro provident repellendus nam,
          voluptatem nemo eius aut atque, minus ipsum vitae quas! Aliquam
          reprehenderit cupiditate blanditiis dolores quas at nisi perspiciatis
          eveniet doloremque quaerat! Tempore alias, iusto possimus qui vitae
          quisquam itaque illum voluptates dolorum animi velit, laborum ab
          provident aspernatur officia inventore excepturi, id dignissimos
          molestias. Esse tenetur, ipsum consequuntur sint sunt saepe
          reprehenderit nihil nesciunt deleniti!
        </Typography>
      </Box>

      <Typography sx={{ p: "10px" }}>
        <b>Terms & Conditions</b>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          cupiditate saepe dignissimos fugit sapiente facilis omnis, praesentium
          quidem
        </Typography>
      </Typography>

      {/* <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 10, color: "white", width: "300px", height: "50px" }}
      >
        Book Now
      </Button> */}
      <Link to={"../event-ticket-purchase/" + bookedId}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            ml: 1,
            mb: 10,
            color: "white",
            width: "300px",
            height: "50px",
          }}
        >
          Book Now
        </Button>
      </Link>
    </>
  );
};

export default EventSammary;
