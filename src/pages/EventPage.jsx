import React, { useState } from "react";
import EventImage from "../assets/image1.jpeg";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const EventPage = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [checked, setChecked] = useState(false);

  const upcomingEventData = [
    {
      image: EventImage,
      date: "27 July, 24",
      location: "Doha, Qatar",
      booked: "Amith",
      contact: "+ 123 567 879",
      mail: "abc@gmail.com",
    },
  ];

  const pastEventData = [
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
  ];

  const handleToggle = () => {
    setShowPastEvents((prev) => !prev);
    setChecked(!checked);
  };

  const renderEventCards = (eventData) =>
    eventData.map((data, index) => (
      <div
        key={index}
        className="bg-secondary text-foreground border-[] h-auto w-[250px] rounded-3xl flex flex-col gap-2 drop-shadow-2xl p-4 my-4 font-bold text-xs"
      >
        <img
          src={data.image}
          alt="Event"
          className="rounded-3xl h-[150px] w-full object-cover"
        />
        <div className="flex gap-10">
          <p className="flex gap-2 text-center">
            <span>
              <CiCalendar className="size-4 text-blue-500" />
            </span>
            {data.date}
          </p>
          <p className="flex gap-1">
            <span>
              <FaLocationDot className="text-blue-500 size-3" />
            </span>
            {data.location}
          </p>
        </div>
        <p>Booked By: {data.booked}</p>
        <p>Contact: {data.contact}</p>
        <p>Mail: {data.mail}</p>
      </div>
    ));

  return (
    <div className="bg-secondary min-h-screen p-10">
      <div className="bg-accent rounded-lg shadow-md mb-6 h-auto p-4">
        <div>
          <div className="relative w-56 h-10  shadow-lg rounded-3xl flex items-center justify-center bg-white left-[850px]">
            <input
              type="checkbox"
              className="absolute w-full h-full opacity-0 cursor-pointer z-20"
              checked={showPastEvents}
              onChange={handleToggle}
            />
            <div className="absolute w-full h-full flex items-center rounded-xl justify-between px-3 z-10">
              <span
                className={`font-bold text-sm ${
                  checked ? "text-black" : "text-white"
                } `}
              >
                Current Event
              </span>
              <span
                className={`font-bold text-sm ${
                  checked ? "text-white" : "text-black"
                } `}
              >
                Past Event
              </span>
            </div>
            <div className="absolute top-1 right-1 bottom-1 left-1 rounded transition-all duration-500 ease-in-out"></div>
            <div className="absolute w-full h-10 flex items-center justify-between px z-0">
              <div
                className={`bg-blue-500 ${
                  checked ? "w-28" : "w-32"
                } rounded-xl h-10 transition-all duration-500 ease-in-out ${
                  checked ? "ml-28 " : ""
                }`}
              ></div>
            </div>
          </div>
        </div>

        <p className="font-extrabold text-foreground">
          {showPastEvents ? "Past Events" : "Upcoming Events"}:
        </p>
        <div className="pl-8 gap-10 grid grid-cols-4">
          {showPastEvents
            ? renderEventCards(pastEventData)
            : renderEventCards(upcomingEventData)}
        </div>
      </div>
    </div>
  );
};

export default EventPage;