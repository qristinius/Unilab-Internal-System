import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProjectData } from "../../data";
import { SProjectDiv, SProjectCard, SProjectImg } from "./ProjectSlider.Styled";

export const ProjectSlider = ({ onChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    beforeChange: (_oldIndex, newIndex) => {
      onChange(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  return (
    <SProjectDiv>
      <Slider {...settings}>
        {ProjectData.map(({ id, src }) => (
          <SProjectCard key={id}>
            <SProjectImg src={src} alt={"banner" + id} />
          </SProjectCard>
        ))}
      </Slider>
    </SProjectDiv>
  );
};
