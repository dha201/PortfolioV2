import PropTypes from 'prop-types'

PortfolioItems.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

function PortfolioItems({ title, imgUrl, stack, link, description }) {
   return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-md overflow-hidden flex items-stretch mb-10 w-full max-w-full mx-auto"
        >
         <div className="absolute -inset-x-10 -inset-y-2.5 hidden rounded md:-inset-x-12 md:-inset-y-4 lg:block" />

        
         <div className="flex w-full">
            <div className="relative w-1/3 flex-none -ml-2">
               <div className="w-full aspect-[16/9] m-2 overflow-hidden rounded-md border border-stone-600">
                  <img
                     src={imgUrl}
                     alt="portfolio"
                     className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
               </div>
            </div>
          
            <div className="flex-grow flex flex-col justify-start mx-2 md:ml-8">
               
               <div className="flex items-center mb-2">
                  <h3 className="text-sm md:text-lg dark:text-white font-semibold leading-tight break-words mr-2">{title}</h3>
                  <span className="[&>svg]:h-5 [&>svg]:w-5 text-white ml-3">
                     <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 496 512">
                     <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                     </svg>
                  </span>

                  <span className="text-white ml-5">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                     </svg>
                  </span>
               </div>

               <p className="flex flex-wrap gap-2 flex-row text-xs md:text-xs text-white break-words mb-2">
                  {stack.map(item => (
                     <span key={item} className="font-bold inline-block px-4 py-2 bg-purple-700 rounded-full" style={{ textShadow: '0 0 10px #9b59b6' }}>
                        {item}
                     </span>
                  ))}
               </p>

               <p className="text-xs md:text-sm text-stone-300 mt-4 break-words">
                 {description}
               </p>

            </div>

         </div>
      </a>
    )
    
}


export default PortfolioItems
