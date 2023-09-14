import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./CarouselTop.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginRight: "40px",
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "40px",
        background: "black",
      }}
      onClick={onClick}
    />
  );
}

export default class CarouselTop extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
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

    return (
      <Box className={styles.carouselTop}>
        <Slider {...settings}>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 25% off</Text>
            <Text className={styles.CarouselStyle}> Select Crocs</Text>
            <Text  as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 30% off</Text>
            <Text className={styles.CarouselStyle}>Select Nike</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 70% off</Text>
            <Text className={styles.CarouselStyle}>Select Women's Styles</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 40% off</Text>
            <Text className={styles.CarouselStyle}>Select Kids' Styles</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 30% off</Text>
            <Text className={styles.CarouselStyle}> Select Athletics</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 35% off</Text>
            <Text className={styles.CarouselStyle}>Select kids</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 45% off</Text>
            <Text className={styles.CarouselStyle}>Select Mens</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 15% off</Text>
            <Text className={styles.CarouselStyle}>Select Women</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 25% off</Text>
            <Text className={styles.CarouselStyle}>Select Crocs</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 30% off</Text>
            <Text className={styles.CarouselStyle}>Select Nike</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 70% off</Text>
            <Text className={styles.CarouselStyle}>Select Women's Styles</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
          <Box className={styles.carousel_box}>
            <Text className={styles.CarouselOffer}>Up to 40% off</Text>
            <Text className={styles.CarouselStyle}>Select Kids' Styles</Text>
            <Text as="u">
              <Link to="">Shop Now</Link>
            </Text>
          </Box>
        </Slider>
      </Box>
    );
  }
}
