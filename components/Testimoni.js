import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const TeamList = ({
  listTeam = [
    {
      name: "Gaurav Batra",
      image: "/assets/people-3.png",
      city: "Founder",
      country: "Semaai",
      testimoni: "Lorem Ipsum",
    },
    {
      name: "Yugandhar Tripathi",
      image: "/assets/people-3.png",
      city: "SDE",
      country: "Amazon",
      testimoni: "Learner",
    },
    {
      name: "Pranav Malik",
      image: "/assets/people-3.png",
      city: "SDE 3",
      country: "Google",
      testimoni: "Lorem Ipsum",
    },
    {
      name: "Ayush",
      image: "/assets/people-3.png",
      city: "x",
      country: "y",
      testimoni: "qwerty",
    },
    {
      name: "Ayush",
      image: "/assets/people-3.png",
      city: "x",
      country: "y",
      testimoni: "qwerty",
    },
    {
      name: "Ayush",
      image: "/assets/people-3.png",
      city: "x",
      country: "y",
      testimoni: "qwerty",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div
      className="px-3"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridRowGap: "20px",
        gridColumnGap: "20px",
      }}
    >
      {listTeam.map((listTeam, index) => (
        <div className="px-3 flex items-stretch" key={index}>
          <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
              <div className="flex order-2 xl:order-1">
                <Image
                  src={listTeam.image}
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600 capitalize">
                    {listTeam.name}
                  </p>
                  <p className="text-sm text-black-500 capitalize">
                    {listTeam.city},{listTeam.country}
                  </p>
                </div>
              </div>
              <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                <p className="text-sm">{listTeam.rating}</p>
              </div>
            </div>
            <p className="mt-5 text-left">“{listTeam.testimoni}”.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
