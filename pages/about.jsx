
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHash } from 'react-icons/bi';
import { useRouter } from 'next/router';

function about() {
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

                            <div onClick={() => { router.push('/about') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105 active">
                                <div className=" text-zinc-300 text-xl mr-1"><BiHash /></div><a href="#about" className=' text-zinc-300 font-semibold cursor-pointer hover:text-white'>About</a>
                            </div>

                            <div onClick={() => { router.push('/skills') }} className="w-full pl-2 h-12 flex justify-start cursor-pointer items-center rounded-lg transition-all ease-out duration-300 hover:bg-zinc-600 hover:scale-105">
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
                                <div className="text-zinc-300 text-xl mr-1"><BiHash /></div><h2 className='text-zinc-300 font-semibold cursor-pointer hover:text-white'>About</h2>
                            </div>

                            <section className='flex flex-col justify-center items-center mt-4 rounded-xl border-2 border-b-[#36393e] border-x-0 border-t-0'>
                                <h2 className='text-2xl text-white'>Come mi descrivo :</h2>
                                <div className="h-[600px] w-4/5 text-center flex overflow-auto hover:overflow-scroll scrollbar-none ">
                                    <p className='text-xl  text-slate-200 mt-14 '>
                                        Sono una persona disponibile, creativa e innovativa con una forte attenzione per i dettagli e l'organizzazione.
                                        Adoro lavorare in gruppo, ma sono anche in grado di lavorare da solo. Sono una persona empatica,
                                        capisco le esigenze degli altri e cerco sempre di fare del mio meglio per dare loro una mano.
                                        Il mio obbiettivo è diventare un front-end developer e per questo sto costantemente cercando di migliorare
                                        le mie competenze e di imparare nuove tecnologie, inoltre,
                                        ho una mentalità aperta per apprendere sempre nuove competenze e, mi piace sempre trovare nuove soluzioni ai problemi.
                                        La mia passione per la programmazione è iniziata un anno fa.
                                        Ho iniziato a imparare i fondamenti del codice e ho scoperto che mi piaceva molto creare siti web.
                                        Da allora, ho continuato ad apprendere e migliorare le mie competenze.
                                        Seguo corsi online e ho completato un corso di sviluppo web.
                                        Ho sviluppato alcuni progetti personali per mettere in pratica ciò che avevo imparato.
                                        Sto cercando un'opportunità lavorativa per diventare un front-end developer.
                                        Sono disponibile a lavorare sia in un ambiente di lavoro tradizionale che in un ambiente di lavoro remoto.
                                        Sarei onorato di far parte di un team di sviluppatori esperti e di imparare da loro.
                                        </p>
                                </div>
                            </section>

                            <footer className=' text-center font-thin text-zinc-400'>Made with NEXTJS and TAILWIND |30/01/2023|</footer>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default about;
