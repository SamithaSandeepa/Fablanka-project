import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeWrapper } from "../style";
import style from "../../styles/NewAlert.module.css";
import { API_URL } from "../../config/index";

const NewAlert = () => {
  const [news, setNews] = useState([]);
  // const [status, setStatus] = useState(isChacked);

  const getNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/newspage/`);
      //only status is true data will be shown
      setNews(response.data.filter((item) => item.status === true)); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          speed: 1000,
          autoplaySpeed: 3000,
          vertical: true,
          verticalSwiping: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          speed: 1000,
          autoplaySpeed: 3000,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 1000,
          autoplaySpeed: 3000,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 1000,
          autoplaySpeed: 3000,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
    // adaptiveHeight: false,
    // variableHeight: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div className={`container-fluid ${style.container}`}>
        <HomeWrapper>
          {/* <h2 className="text-center">News</h2> */}
          <Slider {...settings} className="m-10 mt-2 py-2">
            {news.map((curElem) => {
              return (
                <div
                  className="card mb-3 border-0 shadow-none border-top my-2 "
                  style="width: 18rem;"
                  key={curElem.id}
                >
                  <div className="row no-gutters">
                    <div className="col-3 m-0 pr-2">
                      <img
                        src={curElem.image}
                        className="card-img image-fluid mt-2"
                        alt="..."
                      />
                    </div>

                    <div className="col-9 p-0 m-0 ">
                      <a href={"/news/" + curElem.id} className="no-underline">
                        <div className="card-body py-0 pl-0 ">
                          <p className="card-title text-sm font-semibold text-black hover:text-[#2c185a]">
                            {curElem.title}
                          </p>
                          <p className="card-text lh-1 text-sm text-slate-500 hover:text-[#2a6d99] line-clamp-2 hover:line-clamp-none duration-100 ease-in-out">
                            {curElem.summery}
                          </p>
                        </div>
                      </a>
                    </div>
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

export default NewAlert;
