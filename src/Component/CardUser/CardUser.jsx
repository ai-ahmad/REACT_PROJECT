import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardUser = () => {
  const URL = " http://localhost:3000/Card";
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios.get(URL).then((data) => setCard(data.data));
  }, [URL]);
  return (
    <section className="container max-w-7xl flex flex-col  mx-auto py-7">
      <div>
        <Link className="text-[16px] text-primary font-[600]">TOOL LIST</Link>
      </div>
      <div className="flex  items-center  justify-between flex-wrap">
        <div>
          <h2 className="text-titleColor max-w-[515px] w-full text-[48px] font-[700]">
            Use our assortment of travel plan tools
          </h2>
        </div>
        <div>
          <p className="text-[16px] font-[400] max-w-[435px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet,
            consectetur{" "}
          </p>
        </div>
      </div>

      <div className="card-wrapper flex  flex-wrap justify-center gap-[6%] mt-10">
        {card.map((item) => {
          return (
            <div className="card  max-w-[370px] w-full h-[522px] rounded-xl shadow-md border-2 p-3 border-solid border-[#E4DAFF] mb-4">
              <div className="card-header p-3 flex flex-col justify-center items-center text-center h-full gap-[10%]">
                <img src={item.img} alt="" />
                <p className="text-[18px] font-[600]">{item.title}</p>
                <p className="text-[16px] font-[400]">{item.description}</p>
                <button className="max-w-[245px] w-full h-[64px] border-solid border-2 rounded-[200px] font-[500] leading-7 tracking-wider text-primary border-borderColor">
                  LEARN MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardUser;
