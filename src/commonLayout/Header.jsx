import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const { client } = useSelector((state) => state.client);
  const { user } = useSelector((state) => state.user);
  const { userDetail } = useSelector((state) => state.userDetail);

  return (
    <header className="border-gray-200 flex flex-row bg-primary">
      <div className="flex p-3 gap-[450px] text-white">
        <p className="text-2xl font-bold">
          Welcome to {user.role.toLowerCase() === "user" ? "User" : "Vendor"}{" "}
          Dashboard
        </p>
        <NavLink to="#" className="flex items-center">
          <div className="flex gap-2 items-center">
            <FaLocationDot className="text-blue-500 text-xl" />
            <p className=" underline underline-offset-1">
              {client && client.location
                ? client.location
                : userDetail && userDetail.location
                ? userDetail.location
                : "Michingam, US"}
            </p>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
