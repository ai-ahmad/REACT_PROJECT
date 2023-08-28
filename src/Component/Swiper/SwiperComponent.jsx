// import React, { useEffect, useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "./Swiper.css";

// // import required modules
// import { Scrollbar } from "swiper/modules";
// import axios from "axios";

// export default function SwiperComponent() {
//   const URL = "http://localhost:3000/SwiperImg";
//   const [card, setCard] = useState([]);
//   useEffect(() => {
//     axios.get(URL).then((response) => setCard(response.data));
//   }, [URL]);
//   return (
//     <section>
//       <Swiper
//         scrollbar={{
//           hide: true,
//         }}
//         modules={[Scrollbar]}
//         className="mySwiper"
//       >
//        {card.map(item => {
//         return (
//             <SwiperSlide>
//                 <img src={item.img} alt="" />
//             </SwiperSlide>
//         )
//        })}
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }
