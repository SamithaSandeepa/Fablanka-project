import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeWrapper } from "../style";
import styles from "./PastEvent.module.css";
import { API_URL } from "../../config/index";

const PastEvent = () => {
  const [events, setEvents] = useState([]);
  console.log(events);
  // const [status, setStatus] = useState(isChacked);

  const getEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/pastevent/`);
      //only status is true data will be shown
      setEvents(response.data.filter((item) => item.status === true)); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid px-5 pb-5 pt-3 rounded-3 shadow bg-white mb-5">
        <h1 className="text-center pb-3 text-3xl">Past Event</h1>
        <HomeWrapper>
          <Slider {...settings} className={styles.card_container}>
            {events.map((curElem) => {
              console.log(curElem,"test");
              return (
                <div className="p-4 sm:w-1/2 lg:w-1/3" key={curElem.id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:auto md:h-48 w-full object-cover object-center hover:scale-125 duration-300 ease-in-out"
                      src={curElem.image_project_m}
                      alt="blog"
                    />
                    <Link
                      href="/pastevents/[id]"
                      as={`/pastevents/${curElem.id}`}
                    >
                      <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h1 className="sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3">
                          {curElem.title_pastevent}
                        </h1>
                        <p className="leading-relaxed mb-3 line-clamp-3 hover:line-clamp-none duration-100 ease-in-out">
                          {curElem.summery_pastevent}
                        </p>
                        <div className="flex items-center flex-wrap ">
                          {/* <h2 className="text-base text-right font-medium text-indigo-300 md:mb-2 lg:mb-0">
                            October 29, 2021
                          </h2> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </HomeWrapper>
      </div>
    </>
  );
};

export default PastEvent;
