import { React, useState } from "react";
import {
  Hoteldetailscomponents,
  Hoteldetailscourses,
  Hoteldetailscoursesone,
  Hoteldetailscoursestwo,
  Hoteldetailsdetailcourses,
  Hoteldetailsdetaildiv,
  Hoteldetailsdetailimage,
  Hoteldetailsdetailname,
  Hoteldetailsdetailname2,
  Hoteldetailsdetaliscenter,
  Hoteldetailsdetalismain,
  Hoteldetailsimage1,
  Hoteldetailsimage2,
  Hoteldetailsimage2a3,
  Hoteldetailsimages,
  Hotelnamecomponent,
  Hotelnamecomponentmain,
} from "./Allhotelsdetails.styled";
import { useLocation } from "react-router-dom";

const Allhotelsdetails = (props) => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <Hoteldetailsdetalismain>
        <Hoteldetailsdetaliscenter>
          <Hoteldetailsimages>
            <Hoteldetailsimage1>
              <img src={data.hotelroomimage1} />
            </Hoteldetailsimage1>
            <Hoteldetailsimage2a3>
              <Hoteldetailsimage2>
                <img src={data.hotelroomimage2} />
              </Hoteldetailsimage2>
              <Hoteldetailsimage2>
                <img src={data.hotelroomimage3} />
              </Hoteldetailsimage2>
            </Hoteldetailsimage2a3>
          </Hoteldetailsimages>
          <Hoteldetailscomponents>
            <ul>
              <li>Overview</li>
              <li>Rooms</li>
              <li>Guest Reviews</li>
            </ul>
          </Hoteldetailscomponents>
          <Hotelnamecomponentmain>
<Hotelnamecomponent></Hotelnamecomponent>
          </Hotelnamecomponentmain>

          {/* <Hoteldetailsdetailname>
            <p>{data.hotelname}</p>
          </Hoteldetailsdetailname>
          <Hoteldetailsdetaildiv>
            <Hoteldetailsdetailimage></Hoteldetailsdetailimage>
            <Hoteldetailsdetailname2>
              <p>{data.category}</p>
            </Hoteldetailsdetailname2>
          </Hoteldetailsdetaildiv> */}
        </Hoteldetailsdetaliscenter>
      </Hoteldetailsdetalismain>
    </>
  );
};

export default Allhotelsdetails;
