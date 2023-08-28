import axios from "axios";
import React, { useEffect, useState } from "react";

const MiniCard = () => {
  const [card, setCard] = useState([]);
  const URL = " http://localhost:3000/MiniCard";
  useEffect(() => {
    axios.get(URL).then((data) => setCard(data.data));
  }, [URL]);
  console.log(card);
  return (
    <div className="wrapper flex h-[200px] border-t-1 border-b-1 border-solid justify-center border-borderColor  items-center">
      {card.map((item) => {
        return (
            <div className="flex gap-[20px] items-center max-w-[550px] w-full max-h-[200px] h-full  border-solid border-[1px] border-borderColor justify-center p-4 ">
            <img src={item.img} alt="" />
            <ul>
              <li>
                <h2 className="text-[32px] text-primary font-[700]">{item.number}</h2>
              </li>
              <li>
                <p className="text-[#6E7191] text-[16px] max-w-[245px] w-full   ">{item.about}</p>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default MiniCard;
