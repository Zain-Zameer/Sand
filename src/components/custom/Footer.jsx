import React from 'react'

function Footer() {
  return (
     <div className="flex justify-center items-center bg-black w-full py-4">
        <p className="text-white text-sm tracking-wide">
          © {new Date().getFullYear()} SAND. All rights reserved.
        </p>
      </div>

  )
}

export default Footer
