import React from 'react'

function adminLogin() {
  return (
     <div className='min-w-screen min-h-screen bg-[#0f0e1f] flex justify-center items-center'>
      
      <div className='w-[350px] text-[#d0d2d6] px-15 py-12'>
              <div className='bg-[#283046] px-5 py-7 rounded-md'>
                  <div className='flex justify-center mt-7 items-center mb-5 ' >
                      <img src='logo1.png' className='w-full h-20 bg-[#d0d2d6] justify-center items-center flex rounded-lg border-solid'/>
                  </div>
          
          
          <form>
            <div className='flex flex-col gap-1 mb-3 w-full'>
              <label htmlFor='name'>Email: </label>
              <input type='email' placeholder='email' id='Inputemail' required className='px-3 py-2 outline-none border border-slate-500 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'/>
            </div>
            <div className='flex flex-col gap-1 mb-3 w-full'>
              <label htmlFor='name'>Password: </label>
              <input type='password' placeholder='password' id='Inputpassword' required className='px-3 py-2 outline-none border border-slate-500 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'/>
            </div>
            <div className='flex items-center gap-3 mb-2 w-full'>
              
              <input type='checkbox' placeholder='name' id='namInput' required className='h-4 w-4 outline-none border border-gray-300 text-blue-600 bg-transparent bg-gray-100 rounded-lg focus:ring-blue-500 overflow-hidden' />
              <label htmlFor='checkbox'>I agree to privacy and policy terms</label>
            </div>
          </form>
          <button className='bg-blue-500 w-full hover:shadow-blue hover:shadow-lg text-white px-2 py-3 rounded-lg'>
               Login
                  </button>
                  
              </div>
          </div>
          </div>
  )
}

export default adminLogin;
