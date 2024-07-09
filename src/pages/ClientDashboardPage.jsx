import React from "react";
import EventImage from "../assets/image1.jpeg";
import { useNavigate } from "react-router-dom";

const ClientDashboardPage = ({ clientDetail }) => {
  const navigate = useNavigate();

  const EventData = [
    {
      value: 22,
      name: "Done",
      color: "rgb(90, 219, 188)",
    },
    {
      value: 7,
      name: "in Progress",
      color: "rgb(255, 187, 108)",
    },
    {
      value: 14,
      name: "Waiting for Review",
      color: "rgb(103, 210, 239)",
    },
    {
      value: 12,
      name: "Ongoing",
      color: "rgb(255, 118, 158)",
    },
  ];

  const currentEventData = [
    {
      eventName: "Personal Wedding Event",
      name: "Saber & Oro",
      image1: EventImage,
      image2: EventImage,
    },
  ];

  if (!clientDetail) {
    return (
      <div className="flex items-center justify-center text-center p-[300px]  bg-accent">
        Loading...
      </div>
    );
  }

  const handleUpdate = () => {
    const clientId = clientDetail._id;
    navigate("/client/register", { state: { clientId } });
  };

  return (
    <div className=" min-h-screen p-10 bg-secondary ">
      <div className=" rounded-lg shadow-md mb-6 h-auto p-4 bg-accent ">
        <div className="p-8 flex flex-col gap-1">
          <p className="font-extrabold text-2xl text-foreground">
            Client Details
          </p>
        </div>

        <div className="bg-white rounded-lg drop-shadow-md p-4 w-[300px] h-[230px] relative left-[400px]">
          <p className="text-lg">
            {" "}
            <span className="font-bold">Name: </span>
            {clientDetail
              ? clientDetail.firstName + " " + clientDetail.lastName
              : "Isabella Singh"}
          </p>
          <p className="text-gray-700 mt-2">
            {" "}
            <span className="font-bold">Role: </span>
            {clientDetail ? clientDetail.role : ""}{" "}
          </p>
          <p className="text-gray-700 mt-2">
            {" "}
            <span className="font-bold">Work Experience: </span>
            {clientDetail ? clientDetail.workExperience : ""}
          </p>
          <p className="text-gray-700 mt-2">
            {" "}
            <span className="font-bold">Location: </span>
            {clientDetail ? clientDetail.location : ""}
          </p>

          <br />
          <button
            onClick={handleUpdate}
            className="flex bg-primary rounded-lg text-white p-2 pr-10 pl-10 absolute left-20"
          >
            Update Profile
          </button>
        </div>
        <div className="p-8 flex flex-col gap-1">
          <p className="font-extrabold text-2xl text-foreground">
            GM Organizing Events
          </p>
          <p className="font-normal text-muted-foreground">
            5 Tasks are pending
          </p>
        </div>

        <div className="pl-8 gap-10 grid grid-cols-4">
          {EventData.map((data, index) => (
            <div
              key={index}
              className="h-auto w-[180px] rounded-3xl flex flex-col  gap-2 drop-shadow-2xl p-8 my-4 items-center text-center justify-center text-white"
              style={{ backgroundColor: data.color }}
            >
              <p className="text-4xl">{data.value}</p>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
        <div className="p-8 flex flex-col">
          <p className="font-extrabold text-2xl text-foreground">
            Current Event
          </p>
        </div>
        <div className="pl-8 gap-10 grid grid-cols-2">
          {currentEventData.map((data, index) => (
            <div
              key={index}
              className="bg-primary h-auto w-[400px] rounded-xl shadow-md p-4 text-white relative"
            >
              <p className="font-bold">{data.eventName}</p>
              <p>{data.name}</p>
              <div className="flex">
                <img
                  src={data.image1}
                  className="size-5 rounded-xl border-[1px] border-white"
                />
                <img
                  src={data.image2}
                  className="size-5 rounded-xl border-[1px] border-white absolute top-16 right-[350px]"
                />
              </div>
              <p className="absolute right-6 bottom-4 text-sm">Now</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center p-4 pt-28">
          <button className="bg-primary rounded-lg text-white p-4 pr-20 pl-20">
            View Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardPage;