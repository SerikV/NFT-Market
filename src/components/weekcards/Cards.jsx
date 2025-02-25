import React from 'react'
import artWorks from '../../data/BestOfWeek.json'
import ButtonTransparent from '../../chip/ButtonTransparent'
export default function Card() {
  return (
    <div data-aos='zoom-in' className="art-cards flex flex-wrap justify-center  md:justify-center gap-4 md:mt-5">
        {artWorks.map((art) => (
          <div className="art-card bg-gray-900 rounded-xl overflow-hidden shadow-2xl p-4 flex flex-col items-center transform transition duration-500 hover:scale-105" key={art.title}>
            <img src={art.imageSrc} alt={art.title} className="w-full h-auto object-cover object-center rounded-t-xl"/>
            <div className="p-4  h-auto">
              <h3 className="text-lg font-semibold">{art.title}</h3>
              <p className="text-yellow-400 text-center">{art.price}</p>
              <div className="text-center mt-3">
              <ButtonTransparent text="Place A Bid" />
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}
