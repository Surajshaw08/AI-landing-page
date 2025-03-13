import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Herosection = () => {
    return (
        <div>
            {/* ======================heading div start========================================= */}
            <div className=' flex flex-col items-center mt-6 lg:mt-20'>
                <h1 className=' text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                    AI TOOLS <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "}FOR <br /> DEVELOPER</span>
                </h1>
                <p className=' text-lg mt-10 text-center text-neutral-400 max-w-4xl'>
                    Empower your creativity and bring your ideas to life with our
                    intuitive development tools. Get started today and turn your imagination
                    into immersive reality!
                </p>
            </div>
            {/* ======================heading div end========================================= */}
            <div className=' flex justify-center my-10'>
                <button className=' bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer hover:text-black hover:scale-120'>Start</button>
                <button className=' py-3 px-4 mx-4 border rounded-md'>Documentation</button>
            </div>

            {/* =============================video section============================================ */}
            <div className="flex mt-10 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-140 h-80 border border-orange-700 shadow-sm shadow-orange-400 mx-8 my-4"
                >
                    <source src={video1} type="video/mp4" />
                </video>
            
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-140 h-80 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
                >
                    <source src={video2} type="video/mp4" />
                </video>
            </div>


            {/* =============================video section============================================ */}
        </div>
    )
}

export default Herosection
