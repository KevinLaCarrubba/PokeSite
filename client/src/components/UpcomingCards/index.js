import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import "./style.css";
import { QUERY_CARDS } from "../../utils/queries";

function UpcomingList() {
  const [images, setImages] = useState(null);
  const { loading } = useQuery(QUERY_CARDS, {
    onCompleted(data) {
      setImages(data.getCardImages);
    },
    onError(error) {
      console.log(error);
    },
  });
  return (
    <div className="upcomingBlock">
      <h2>Upcoming Cards</h2>
      {images === null ? (
        <div>Loading...</div>
      ) : (
        images.map((item, key) => (
          <div key={key}>
            <img className="cardImg" src={item.url} key={item.url} />
            <p className="cardName" key={item.public_id}>
              {item.public_id}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default UpcomingList;
