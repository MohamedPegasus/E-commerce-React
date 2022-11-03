import React, { useRef, useState } from "react";
import main from './assets/download (1).jpg';
import man from './assets/download (2).jpg'
import me from './assets/download (3).jpg'
import nem from './assets/download.jpg'
import msn from './assets/image1.jpg'
import mkl from './assets/images (1).jpg'
import mkn from './assets/images (2).jpg'
import mkmq from './assets/images (3).jpg'
import mkmw from './assets/images (4).jpg'
import mkme from './assets/images (5).jpg'
import mkmr from './assets/images (6).jpg'
import mkmrt from './assets/images (7).jpg'
import mkmy from './assets/images (8).jpg'
import mkmu from './assets/images (9).jpg'
import mkmi from './assets/images (10).jpg'
import mkmo from './assets/shrimpo.jpg'
import mkmp from './assets/soga.jpg'
import mklm from './assets/shesh.jpg'
import mkmkj from './assets/grill.jpg'
import mkmh from './assets/criskb.jpg'
import mkmg from './assets/Fried Chicken.jpg'
import mkm from './assets/chrimp pizza.jpg'
import mkmn from './assets/chikburg.jpg'
import mkh from './assets/crispy.jpg'
import mkhg from './assets/chicken kapap.jpg'
import mkhga from './assets/cheese burger.jpg'
import mkhgas from './assets/cheeseburg.jpg'
import mkhgasd from './assets/chrimp pizza.jpg'



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <div className="gpt3__features">
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate:50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={main} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={man} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={me} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nem} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={msn} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkl} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkn} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkm} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmn} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmq} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkme} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmr} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmrt} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmy} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmu} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmi} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmw} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmq} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mklm} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmkj} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmh} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkmg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkh} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkhg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkhga} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkhgas} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mkhgasd} />
        </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  );
}
