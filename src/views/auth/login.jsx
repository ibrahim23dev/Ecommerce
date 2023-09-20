import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai'

const login=()=> {
  return (
    <div className='min-w-screen min-h-screen bg-[#0f0e1f] flex justify-center items-center'>
      
      <div className='w-[350px] text-[#d0d2d6] px-15 py-12'>
        <div className='bg-[#283046] px-5 py-7 rounded-md'>
          <h2 className='text-xl mb-3 text-center'>Welcome to Ecommerc</h2>
          <p className='text-sm md-3 font-sans font-[30px] text-center'>Plase Log in here</p>
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
          <div className='mt-2 flex justify-center gap-3 items-center'>
            <p >Create a account? <Link to='/register'>Sing Up</Link></p>
          </div>

          <div className="w-full flex justify-center items-center mb-4">
            <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            <div className="w-[10%] flex justify-center items-center">
              {" "}
              <span>Or</span>
            </div>
            <div className="w-[45%] bg-slate-700 h-[1px]"></div>
          </div>

          <div className="flex  gap-5  justify-center items-center">
            <div className="w-[35px] h-[35px] flex rounded-lg  bg-purple-500 shadow-lg hover:shadow-orange-500/100 justify-center items-center">
              <span>
                <AiOutlineGooglePlus />
              </span>
            </div>

            <div className="w-[35px] h-[35px] flex rounded-lg  bg-blue-500 shadow-lg hover:shadow-orange-500/100 justify-center items-center">
              <span>
                <AiOutlineGithub />
              </span>
            </div>

            <div className="w-[35px] h-[35px] flex rounded-lg  bg-green-500 shadow-lg hover:shadow-orange-500/100 justify-center items-center">
              <span>
                <AiOutlineFacebook />
              </span>
            </div>

            <div className="w-[35px] h-[35px] flex rounded-lg  bg-orange-500 shadow-lg hover:shadow-orange-500/100 justify-center items-center">
              <span>
                <AiOutlineLinkedin />
              </span>
            </div>
            </div>
          

        </div>
     </div>
    </div>
  )
}

export default login
