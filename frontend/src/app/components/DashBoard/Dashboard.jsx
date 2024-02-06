import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Card from "./Components/Card";
import getAllUserDetailsApi from "../../../api/getAllUserDetails.api";
import getAllEventsApi from "../../../api/getAllEvents.api";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    getAllUserDetailsApi()
      .then((userfetchData) => {
        console.log(userfetchData);
        if (userfetchData.success) {
          setUserData(userfetchData.data);
        }
        return getAllEventsApi();
      })
      .then((eventsData) => {
        if (eventsData.success) {
          setEventsData(eventsData.data);
        }
      });
  }, []);

  const cardClickHandler = () => {
    getAllUserDetailsApi().then((userData) => {
      if (userData.success) {
        setUserData(userData.data);
      }
    });
  };
  return (
    <>
      <div className="flex flex-col-reverse px-[40px] md:flex-row-reverse">
        <div className="mt-[40px] md:p-4 flex-1 md:flex-[0.65] xl:flex-[0.75]">
          <div className="w-full bg-gray-200 p-2 rounded-md shadow-md">
            <div className="text-base w-full px-6 py-2 flex flex-col justify-center items-center">
              <p className="font-bold text-base lg:text-lg">
                RENESSANCE EVENTS
              </p>
            </div>
            <div className="items-center justify-center  py-[30px] px-[30px] flex flex-wrap gap-[50px]">
              {eventsData.map((item,index) => {
                return (
                  <Card
                  key={index}
                    cardClickHandler={cardClickHandler}
                    eventName={item.eventName}
                    svg={item.svg}
                    eventId={item._id}
                    isUserRegistered={userData.eventsParticipated.includes(
                      item._id
                    )}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full mt-[50px] md:mt-[0px] md:flex-[0.35] xl:flex-[0.25] md:pt-[59px]">
          <div className="rounded-md w-full flex flex-col bg-gray-200 py-[40px]">
            <div className="w-full flex flex-col justify-center items-center">
              <FaUserCircle className="w-24 h-24" />
              <p className="text-base lg:text-lg font-bold">
                {userData?.username}
              </p>
            </div>

            <div className="text-base px-6 py-2 flex flex-col mt-[40px]">
              <p className="">
                <span className="font-bold">RenID : </span> {userData?.renId}
              </p>
              <p>
                <span className="font-bold">Email : </span>
                {userData?.email}
              </p>
              <p>
                <span className="font-bold">Phone No. : </span>{" "}
                {userData?.phone}
              </p>
              <p>
                <span className="font-bold">Gender : </span> {userData?.gender}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
