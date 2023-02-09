
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHash } from 'react-icons/bi';
import { SiHtml5, SiJavascript, SiTailwindcss,} from 'react-icons/si';
import { DiCss3, DiPhotoshop } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import {SiAdobelightroom, SiAutodesk, SiExpress, SiMicrosoftoffice, SiThreedotjs, SiVectorworks} from 'react-icons/si';
import {GrNode, GrReactjs} from 'react-icons/gr';
import {TbBrandNextjs} from 'react-icons/tb';
import {FaFigma, FaJava} from 'react-icons/fa';
import {RiEnglishInput} from 'react-icons/ri';
import { useRouter } from 'next/router';

function skills() {
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

              <div onClick={() => { router.push('/') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg  transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105 ">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#home" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white '>Home</a>
              </div>
              <div onClick={() => { router.push('/about') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#about" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white'>About</a>
              </div>
              <div onClick={() => { router.push('/skills') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105 active">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#skills" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white'>Skills</a>
              </div>
              <div onClick={() => { router.push('/contact') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105">
                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#contact" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white'>Contact</a>
              </div>

              <div className="w-full pl-2 h-12 flex justify-start items-center mt-5 cursor-pointer">
                <div className=" text-zinc-300 mr-1 cursor-pointer"><IoIosArrowForward /></div><h1 className='cursor-pointer text-zinc-300 font-semibold text-sm'>CANALI VOCALI</h1>
              </div>
            </div>
            <div className=" hidden  xl:flex xl:flex-col xl:h-[722px] px-2 w-4/5 rounded-br-lg bg-[#424549]">
              <div className="w-full pl-2 h-12 flex justify-start items-center border-[#282b30] border-b-2">
                <div className="text-zinc-300 text-xl mr-1"><BiHash /></div><h2 className='text-zinc-300 font-semibold cursor-pointer hover:text-white'>Skills</h2>
              </div>

              <section className='flex flex-col justify-start items-center mt-5  h-[86%] gap-4 overflow-auto hover:overflow-scroll scrollbar-none'>

                <div className="flex w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-black rounded-full dark:bg-gray-600">
                    <span class="font-medium text-white ">FR</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-xl font-semibold text-white relative bottom-1">Francesco</div>
                    <div className="ml-5 text-lg font-medium text-zinc-200">Le mie abilità al momento : </div>
                  </div>
                </div>

                <div className="flex w-full ml-5  transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ">
                    <div className="text-4xl relative top-1 left-1 text-blue-700"><SiHtml5 /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">HTML</div>
                    <div className="ml-5 text-zinc-300">Grado : Intermedio </div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ">
                    <div className="text-5xl relative top-1 left-1 text-amber-300"><DiCss3 /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">CSS</div>
                    <div className="ml-5 text-zinc-300">Grado : Intermedio</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ">
                    <div className="text-5xl relative top-1 left-1 text-yellow-300"><SiJavascript /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">JAVASCRIPT</div>
                    <div className="ml-5 text-zinc-300">Grado : Medio-Basso</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ">
                    <div className="text-5xl relative   text-blue-500">< GrReactjs /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">REACT</div>
                    <div className="ml-5 text-zinc-300">Grado : Medio-Basso</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ">
                    <div className="text-5xl relative top-1 left-1 text-black"><TbBrandNextjs /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">NEXTJS</div>
                    <div className="ml-5 text-zinc-300">Grado : Medio-Basso</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ">
                    <div className="text-5xl relative -top-1 left- text-blue-700"><SiTailwindcss /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">TAILWIND</div>
                    <div className="ml-5 text-zinc-300">Grado : Intermedio</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative left-1 text-green-500"><GrNode /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">NODE.JS</div>
                    <div className="ml-5 text-zinc-300">Grado : Basso</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-white"><SiExpress /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">EXPRESS.JS</div>
                    <div className="ml-5 text-zinc-300">Grado : Basso</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-red-600"><FaJava /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">JAVA</div>
                    <div className="ml-5 text-zinc-300">Grado : Base</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-purple-700"><SiVectorworks/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">VECTARY</div>
                    <div className="ml-5 text-zinc-300">Grado : Base</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative top-1 left-1 text-black"><SiThreedotjs/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">THREE.JS</div>
                    <div className="ml-5 text-zinc-300">Grado : Base</div>
                  </div>
                </div>

                <div className="w-full border-[1px] border-[#282b30] my-2"></div>

                <div className="flex w-full transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-black rounded-full dark:bg-gray-600">
                    <span class="font-medium text-white ">FR</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-xl font-semibold text-white relative bottom-1">Francesco</div>
                    <div className="ml-5 text-lg font-medium text-zinc-200">Altre conoscenze : </div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-red-800"><RiEnglishInput /></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">LINGUA INGLESE</div>
                    <div className="ml-5 text-zinc-300">Grado : Certificato B1</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-green-500"><SiAutodesk/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">AUTOCAD</div>
                    <div className="ml-5 text-zinc-300">Grado : Certificato CAD 3D</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-blue-700"><DiPhotoshop/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">ADOBE PHOTOSHOP</div>
                    <div className="ml-5 text-zinc-300">Grado : Intermedio</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-purple-700"><SiAdobelightroom/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">ADOBE LIGHTROOM</div>
                    <div className="ml-5 text-zinc-300">Grado : Intermedio</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-red-500"><FaFigma/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">FIGMA</div>
                    <div className="ml-5 text-zinc-300">Grado : Basso</div>
                  </div>
                </div>

                <div className="flex w-full ml-5 transition-all ease-in-out cursor-pointer rounded-xl hover:bg-[#282b30] p-2 ">
                  <div class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ">
                    <div className="text-5xl relative  left-1 text-orange-700"><SiMicrosoftoffice/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="ml-5 text-lg font-semibold text-zinc-300 relative bottom-1">PACCHETTO OFFICE</div>
                    <div className="ml-5 text-zinc-300">Grado : Intermedio</div>
                  </div>
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

export default skills;
