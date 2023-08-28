import React from "react";

const ShowCase = () => {
  return (
    <div className=" relative h-[634px] flex justify-center sm:flex-col" >
      <div className="container max-w-7xl flex  flex-col gap-[25px] mx-auto py-9">
        <h3 className="text-titleColor text-[64px] font-[700px] max-w-[700px] w-full ">
          Plan your next big trip overseas.
        </h3>
        <div className="flex gap-[3%] flex-wrap">
          <button className="w-[243px] h-[64px]  text-white text-[16px] rounded-[200px] bg-primary mb-4">
            BEGIN PLANS
          </button>
          <button className="w-[243px] h-[64px]  text-primary text-[16px] rounded-[200px] bg-white border-solid border-primary border-2">
            REVIEW PLANS
          </button>
        </div>
      </div>
      <div>
        <img
          src="/img/Boarding.png"
          alt=""
          className="absolute top-0 right-0 max-h-[634px]"
        />
      </div>
    </div>
  );
};

export default ShowCase;
