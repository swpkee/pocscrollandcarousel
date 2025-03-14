"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ArrowCarousel from "../svg/ArrowCarousel";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const mediaUrls = [
    "/testimage/test1.jpg",
    "/testimage/test1234.gif",
    "https://www.example.com/videos/sample.mp4",
    "/testimage/test1.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/ltrMfT4Qz5Y",
    "/testimage/test1.jpg",
    "/testimage/test1234.gif",
    "/testimage/test1.jpg",
    "/testimage/test1234.gif",
  ];

  const isVideo = (url: string) => {
    return /\.(mp4|webm|ogg|avi)$/.test(url);
  };

  const isVideoYoutube = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };
  const isImage = (url: string) => {
    return /\.(jpg|jpeg|png|gif|webp)$/.test(url);
  };

  const isGif = (url: string) => {
    return /\.gif$/.test(url);
  };

  return (
    <div className="w-full max-w-[1200px] lg:max-w-[773px]">
      <div>
        <div className="relative mb-5">
          {isVideo(mediaUrls[activeIndex]) ? (
            <video
              width="100%"
              height="474px"
              controls
              className="rounded-sm object-fill"
            >
              <source src={mediaUrls[activeIndex]} type="video/mp4" />
              <source src={mediaUrls[activeIndex]} type="video/webm" />
              <source src={mediaUrls[activeIndex]} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          ) : isVideoYoutube(mediaUrls[activeIndex]) ? (
            <iframe
              width="100%"
              height="474px"
              src={mediaUrls[activeIndex]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm object-fill"
            ></iframe>
          ) : isGif(mediaUrls[activeIndex]) ? (
            <img
              src={mediaUrls[activeIndex]}
              alt="launchpad-carusel"
              className="max-w-[1200px] lg:max-w-[773px] w-full h-[474px] rounded-sm object-fill"
            />
          ) : isImage(mediaUrls[activeIndex]) ? (
            <Image
              src={mediaUrls[activeIndex]}
              alt="launchpad-carusel"
              width={0}
              height={0}
              quality={100}
              sizes="100vw"
              className="max-w-[1200px] lg:max-w-[773px] w-full h-[474px] rounded-sm object-fill"
            />
          ) : null}

          <div
            className={`absolute top-1/2 left-6 transform -translate-y-1/2 p-2 ${
              activeIndex === 0 ? "" : "cursor-pointer"
            } z-10`}
            onClick={() => {
              if (activeIndex === 0) return;
              setActiveIndex((prev) =>
                prev > 0 ? prev - 1 : mediaUrls.length - 1
              );
              swiperInstance?.slideTo(activeIndex - 1);
            }}
          >
            <ArrowCarousel
              className="rotate-180"
              width="18"
              height="34"
              color={activeIndex === 0 ? "#454F5B" : "#146EF5"}
            />
          </div>

          <div
            className={`absolute top-1/2 right-6 transform -translate-y-1/2  p-2 ${
              activeIndex === mediaUrls.length - 1 ? "" : "cursor-pointer"
            } z-10`}
            onClick={() => {
              if (activeIndex === mediaUrls.length - 1) return;
              setActiveIndex((prev) =>
                prev < mediaUrls.length - 1 ? prev + 1 : 0
              );
              swiperInstance?.slideTo(activeIndex + 1);
            }}
          >
            <ArrowCarousel
              width="18"
              height="34"
              color={
                activeIndex === mediaUrls.length - 1 ? "#454F5B" : "#146EF5"
              }
            />
          </div>

          <div className="absolute cursor-pointer bottom-2 left-1/2 transform -translate-x-1/2">
            {mediaUrls.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-3 h-3 mx-1 rounded-full ${
                  activeIndex === index ? "bg-primary" : "bg-primary/35"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  swiperInstance?.slideTo(index);
                }}
              />
            ))}
          </div>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={4.5}
          freeMode={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
        >
          {mediaUrls.map((url, index) => (
            <SwiperSlide key={index}>
              {isVideo(url) ? (
                <video
                  width="100%"
                  height="120"
                  controls
                  className={`cursor-pointer ${
                    activeIndex === index
                      ? "border-2 border-solid border-primary"
                      : "border-none"
                  } min-w-[140px] w-full h-20 rounded-sm`}
                >
                  <source src={url} type="video/mp4" />
                  <source src={url} type="video/webm" />
                  <source src={url} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              ) : isVideoYoutube(url) ? (
                <iframe
                  width="100%"
                  height="120"
                  src={url}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={`cursor-pointer ${
                    activeIndex === index
                      ? "border-2 border-solid border-primary"
                      : "border-none"
                  } min-w-[140px] w-full h-20 rounded-sm`}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperInstance?.slideTo(index);
                  }}
                ></iframe>
              ) : isGif(url) ? (
                <img
                  src={url}
                  alt={`Slide ${index}`}
                  className={`cursor-pointer ${
                    activeIndex === index
                      ? "border-2 border-solid border-primary"
                      : "border-none"
                  } min-w-[140px] w-full h-20 rounded-sm`}
                />
              ) : isImage(url) ? (
                <Image
                  src={url}
                  alt={`Slide ${index}`}
                  width={0}
                  height={0}
                  quality={100}
                  sizes="100vw"
                  className={`cursor-pointer ${
                    activeIndex === index
                      ? "border-2 border-solid border-primary"
                      : "border-none"
                  } min-w-[140px] w-full h-20 rounded-sm`}
                />
              ) : null}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
