const Contact = () => {
  return (
    <div className='flex flex-col mb-10'>
      <h2 className="text-2xl font-semibold text-purple-200 mb-4">Contact me</h2>

      <div className='flex'>
        <form 
          action="https://getform.io/f/azylgznb"
          method="POST"
          className='flex flex-col w-full'
        >
          <input 
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input 
            type="text"
            name="name"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none">
          </textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-700 drop-shadow-md hover:stroke-white'
            >
              Let&apos;s Connect!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact