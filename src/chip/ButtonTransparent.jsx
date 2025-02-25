import React from 'react'

export default function ButtonTransparent(props) {
  return (
    <button className="learn-more-button hover:bg-blue-400 bg-transparent border border-white text-white font-bold py-3 px-5 rounded-md">
    {props.text}
  </button>
  )
}
