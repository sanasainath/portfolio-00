// import React from 'react';
// import './testimonials.css';
// import {Pagination } from 'swiper/modules';
// import im1 from '../../assets/me-about.jpg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>
  
//         <Swiper className='container testimonials__container'
//         modules={[Pagination]}
//         spaceBetween={40}
//         slidesPerView={1}
      
//         pagination={{ clickable: true }}
       
  
        
        
//         >
//           <SwiperSlide>
//             <article className='testimonial'>
//               <div className='client__avatar'>
//                 <img src={im1} alt='One'/>
//               </div>
//               <h5 className='client__name'>Erviest</h5>
//               <small className='client__review'>
//                 skmde wendkjw ee jew dj  imw        e eiwmid i iw eis fla fk qk kkqik ql qkq ie  vinfm m d i2omd2f e fnne  kemdwowm iwoemdnwi iwoidm qoiqjw ioj2nidn 
//               </small>
//             </article>
//           </SwiperSlide>
//           <SwiperSlide>
//             <article className='testimonial'>
//               <div className='client__avatar'>
//                 <img src={im1} alt='One'/>
//               </div>
//               <h5 className='client__name'>Erviest</h5>
//               <small className='client__review'>
//                 skmde wendkjw ee jew dj  imw        e eiwmid i iw eis fla fk qk kkqik ql qkq ie  vinfm m d i2omd2f e fnne  kemdwowm iwoemdnwi iwoidm qoiqjw ioj2nidn 
//               </small>
//             </article>
//           </SwiperSlide>
//         </Swiper>
      
//     </section>
//   )
// }

// export default Testimonials;
import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className='container testimonials__container'>
        <div className='testimonial-placeholder'>
          <p>No testimonials available yet. Check back later!</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
