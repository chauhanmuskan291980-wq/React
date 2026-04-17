import React from 'react'

const Card = ({username="HC",role="SDE"}) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
      
      {/* Profile Image */}
      <div className="p-5">
        <img 
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-green-500"
        />
      </div>

      {/* Info */}
      <div className="px-5 pb-5">
        <h2 className="text-lg font-semibold text-gray-800">
           {username}
        </h2>
        <p className="text-green-500 text-sm mb-3">
          {role}
        </p>

        <p className="text-gray-600 text-sm mb-4">
          Passionate about building beautiful and user-friendly web interfaces.
        </p>

        {/* Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Contact
        </button>
      </div>

    </div>
  )
}

export default Card