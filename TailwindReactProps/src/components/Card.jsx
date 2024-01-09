import React from 'react'

function Card( { cardHead,cardBody,btnText='Click to Know More !' } ) {
  
  // console.log(cardHead,cardBody,btnText);
  
  return (
  <div className="w-[300px] rounded-md border">
  <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    className="h-[200px] w-full rounded-t-md object-cover"
  />
  <div className="p-4">
    <h1 className="inline-flex items-center text-lg font-semibold">
      {cardHead}  {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1>
    <p className="mt-3 text-sm text-gray-600">
      {cardBody}
    </p>
    <button
      type="button"
      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      {btnText}
    </button>
  </div>
    
  </div>

  )
}

export default Card