import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Aurobindo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iure? Cumque nemo, suscipit porro itaque molestias voluptatem rem magnam reprehenderit explicabo laboriosam? Impedit officiis, possimus maxime voluptate accusantium culpa sunt.'
  },
  {
    avatar: AVTR2,
    name:'Aanantha',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque, odio, accusamus debitis quaerat eveniet ipsum qui id recusandae alias facere aspernatur neque adipisci ea inventore, voluptates aut quasi iste?'
  },
  {
    avatar: AVTR3,
    name: 'Abishek',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est ratione accusamus beatae temporibus quae autem numquam nam cumque explicabo inventore placeat consequatur adipisci vitae, id natus quo minus necessitatibus!'
  },
  {
    avatar: AVTR4,
    name: 'Thingpi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt in amet eos aspernatur mollitia sit distinctio cumque ipsa ad, numquam praesentium adipisci? Facere itaque ullam ab molestiae mollitia delectus officiis.'  
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials