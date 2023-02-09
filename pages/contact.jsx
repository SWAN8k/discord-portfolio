import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHash } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa';
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

function contact() {
  const router = useRouter();
  return (
    <div className='h-full  bg-slate-600 '>


      <div className='flex items-center justify-center h-screen  '>
        <div className="h-full w-full md:h-4/5 md:w-3/4  rounded-xl bg-zinc-600 shadow-zinc-900 shadow-2xl">
          <div className="w-full h-6 rounded-t-lg  bg-[#282b30] z-50">
            <p className='text-slate-200 font-extrabold text-xs ml-2 pt-1 z-50'>DISCORD</p>
          </div>
          <div className="xl:hidden flex items-center justify-center h-screen">
            <h1 className='text-white text-2xl font-bold'>Only for Large screens</h1>
          </div>
          <div className="flex lg:h-[717px] w-full rounded-b-xl">
            <div className="hidden xl:flex xl:flex-col xl:h-[722px] w-1/5  rounded-bl-lg bg-[#36393e] px-2">
              <div className="w-full pl-2 h-12 flex justify-start items-center border-[#282b30] border-b-2">
                <h1 className='text-white font-bold text-xl cursor-pointer'>My Portfolio</h1>
              </div>
              <div className="w-full pl-2 h-12 flex justify-start items-center">
                <div className="text-zinc-300 mr-1 cursor-pointer"><IoIosArrowDown /></div><h1 className='text-zinc-300 font-semibold text-sm cursor-pointer'>CANALI TESTUALI</h1>
              </div>

              <div onClick={() => { router.push('/') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg  transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#home" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white '>Home</a>
              </div>
              <div onClick={() => { router.push('/about') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#about" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white'>About</a>
              </div>
              <div onClick={() => { router.push('/skills') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#skills" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white'>Skills</a>
              </div>
              <div onClick={() => { router.push('/contact') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105 active">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#contact" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white'>Contact</a>
              </div>

              <div className="w-full pl-2 h-12 flex justify-start items-center mt-5 cursor-pointer">
                <div className=" text-zinc-300 mr-1 cursor-pointer"><IoIosArrowForward /></div><h1 className='cursor-pointer text-zinc-300 font-semibold text-sm'>CANALI VOCALI</h1>
              </div>
            </div>
            <div className=" hidden  xl:flex xl:flex-col xl:h-[722px] px-2 w-4/5 rounded-br-lg bg-[#424549]">
              <div className="w-full pl-2 h-12 flex justify-start items-center border-[#282b30] border-b-2">
                <div className="text-zinc-300 text-xl mr-1"><BiHash /></div><h2 className='text-zinc-300 font-semibold cursor-pointer hover:text-white'>Contact</h2>
              </div>

              <section className='flex flex-col justify-start items-center mt-5 h-[86%]  gap-5 py-5'>

                <div className="w-[420px] -ml-24  justify-center items-center">
                  <div className="flex justify-center items-center w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] py-2 px-3 ">
                    <div className="flex flex-col ">
                      <div className=" text-3xl font-semibold text-white relative bottom-1">I miei contatti :</div>
                      <div className="ml-5 text-lg font-medium text-zinc-200"> </div>
                    </div>
                  </div>
                </div>

               <div className="  ">
                  <div className="flex w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] py-2 px-3 ">
                    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-black rounded-full dark:bg-gray-600">
                      <div className='flex text-4xl  text-green-600'><FaWhatsapp /></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="ml-5 text-xl font-semibold text-white relative bottom-1">Telefono</div>
                      <div className="ml-5 text-lg font-medium text-zinc-200">Numero : +39 3928010852</div>
                    </div>
                  </div>
                </div> 

                  <div className=" w-[308px] ">
                  <a target="_blank" href="https://it-it.facebook.com/francesco.rielli.1">
                  <div href="https://it-it.facebook.com/francesco.rielli.1" className="flex w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] py-2 px-3 ">
                    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-black rounded-full dark:bg-gray-600">
                    <div className="text-blue-400 text-4xl transition-all ease-in-out duration-300  hover:scale-125 hover:text-blue-600"><BsFacebook/></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="ml-5 text-xl font-semibold text-white relative bottom-1">Socials</div>
                      <div className="ml-5 text-lg font-medium text-zinc-200">
                        <a target="_blank" href="https://it-it.facebook.com/francesco.rielli.1" className="text-blue-600 ">Facebook</a></div>
                    </div>
                  </div></a>
                </div>

                <div className="w-[308px]  ">
                <a target="_blank" href="https://www.instagram.com/francesco.rielli/">  <div className="flex w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] py-2 px-3 ">
                    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-black rounded-full dark:bg-gray-600">
                    <div className=" text-4xl text-orange-500 transition-all ease-in-out duration-300 hover:text-purple-500 hover:scale-125"><BsInstagram/></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="ml-5 text-xl font-semibold text-white relative bottom-1">Socials</div>
                      <div className="ml-5 text-lg font-medium text-zinc-200">
                        <a target="_blank" href="https://www.instagram.com/francesco.rielli/" className="text-orange-500">Instagram</a></div>
                    </div>
                  </div></a>
                </div>

                <div className="w-[308px]  ">
                <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxkNVBKhsNcrJLgNllSqVRzrHwPfKpXpXPmzmCnRFnJpSszGqddqzHvMvbZWSRdXkb"> <div className="flex w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] py-2 px-3 ">
                    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-black rounded-full dark:bg-gray-600">
                    <div className="text-4xl text-red-500 transition-all ease-in-out duration-300 hover:text-red-600 hover:scale-125 "><SiGmail/></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="ml-5 text-xl font-semibold  relative bottom-1 text-white">Mail</div>
                      <div target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxkNVBKhsNcrJLgNllSqVRzrHwPfKpXpXPmzmCnRFnJpSszGqddqzHvMvbZWSRdXkb" className="ml-5 text-lg font-medium text-red-600">Gmail </div>
                    </div>
                  </div></a> 
                </div>


                <div className="w-[308px]  ">
                <a target="_blank" href="https://www.linkedin.com/in/francesco-rielli-937a05235/"> <div className="flex w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] py-2 px-3 ">
                    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-black rounded-full dark:bg-gray-600">
                    <div className=" text-4xl text-blue-400 transition-all ease-in-out duration-300 hover:text-blue-700 hover:scale-125"><BsLinkedin/></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="ml-5 text-xl font-semibold text-white relative bottom-1">Linkedin</div>
                      <div target="_blank" href="https://www.linkedin.com/in/francesco-rielli-937a05235/" className="ml-5 text-lg font-medium text-blue-400">Francesco Rielli</div>
                    </div>
                  </div></a> 
                </div>
              </section>

              <footer className='fixed top-[810px] left-1/2 text-center font-thin text-zinc-400'>Made with NEXTJS and TAILWIND |30/01/2023|</footer>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default contact;
