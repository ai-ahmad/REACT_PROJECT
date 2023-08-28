import React, { useState } from "react";

const ModalNavigation = () => {
  const [serves, setServises] = useState(false);
  const [containes, setContaine] = useState(false);

  return (
    <div className="max-w-[481px]  w-full max-h-[950px] h-full fixed top-0 left-0 z-50 bg-modalColor">
      <div className="modal-header flex justify-between p-6 items-center border-b-2 border-solid border-borderColor">
        <h2 className="text-[34px] text-white font-[700]">Travelulu</h2>
        <img src="/icons/close.svg" alt="" />
      </div>
      <div className="navigation-modal">
        <ul className="text-[white] flex justify-center  gap-[10px] flex-col ">
          <li className="w-[481px] h-[85px] hover:bg-[#5F2EEA]  cursor-auto">
            <span className="ml-[5%] flex items-center h-full text-[20px] font-[600]">
              Home
            </span>
          </li>
          <li
            className="flex gap-3 flex-col justify-center w-[481px] py-7  max-h-[431px] h-full  hover:bg-[#5F2EEA]  cursor-auto"
            onClick={() => {
              if (containes === true) {
                setContaine(false);
                setServises(!serves);
              } else {
                setServises(!serves);
              }
              console.log(serves);
            }}
          >
            <div className="flex gap-2 ">
              <img src="/icons/ochish.svg" alt="" className="ml-[5%]" />
              <span className="flex items-center h-full text-[20px]  font-[600] ">
                Service
              </span>
            </div>
            {serves && (
              <div className="p-6 flex flex-col gap-2">
                <small>Planning</small>
                <small>Financing</small>
                <small>Purchasing</small>
                <small>Reviewing</small>
                <small>Flying</small>
              </div>
            )}
          </li>
          <li
            className="flex gap-3 flex-col justify-center w-[481px] py-7  max-h-[431px] h-full  hover:bg-[#5F2EEA]  cursor-auto"
            onClick={() => {
              if (serves === true) {
                setServises(false);
                setContaine(!containes);
              } else {
                setContaine(!containes);
              }
            }}
          >
            <div className="flex gap-2 ">
              <img src="/icons/ochish.svg" alt="" className="ml-[5%]" />
              <span className="flex items-center h-full text-[20px]  font-[600] ">
                Continents
              </span>
            </div>
            {containes && (
              <div className="p-6 flex flex-col gap-2">
                <small>Planning</small>
                <small>Financing</small>
                <small>Purchasing</small>
                <small>Reviewing</small>
                <small>Flying</small>
              </div>
            )}
          </li>
          <li className="w-[481px]  h-[85px] hover:bg-[#5F2EEA]  cursor-auto ">
            <span className="ml-[5%] flex items-center h-full text-[20px] font-[600] ">
              Contact
            </span>
          </li>
          <li className="w-[481px] h-[85px] hover:bg-[#5F2EEA]  cursor-auto">
            <span className="ml-[5%] flex items-center h-full text-[20px] font-[600]">
              Privacy
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalNavigation;
