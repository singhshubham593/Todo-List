import React from 'react'

const form = () => {
  return (
    <form className="mb-4 w-full ">
        <input type="text" placeholder="Add a new todo" className="flex-grow px-3 py-2 border border-gray-500 w-[300px] text-white rounded-l-lg outline-none focus:ring-blue-500 placeholder:text-red-400"/>
        <button className="bg-green-300 border rounded-r-lg px-2  hover:bg-blue-400 hover:text-white">Add</button>
    </form>
  )
}

export default form
