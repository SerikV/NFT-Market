import React from 'react'

export default function ButtonGreen(props) {
  return (
    <button className="explore-button bg-[#D6EF0E]   hover:bg-blue-400 text-white font-bold py-3 px-5 rounded-md mr-4">
    {props.text}
  </button>
  )
}
