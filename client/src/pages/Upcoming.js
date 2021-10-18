import React from "react";
import Cart from "../components/Cart";
import Upload from "../components/Cloudinary";
import UpcomingList from "../components/UpcomingCards";

const Upcoming = () => {
  return (
    <div className="container">
      <Upload />
      <UpcomingList />
      <Cart />
    </div>
  );
};

export default Upcoming;
