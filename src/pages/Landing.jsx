import React from 'react'
import styles from '../css/landing.module.css'
import { CircleArrowRight, Heading } from 'lucide-react'

function Landing() {
  return (
    <div className="overflow-hidden flex flex-col">
      <section className="w-screen min-h-screen bg-[url('/src/assets/landingBG1.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center text-center px-4">
        <h1 className={styles.h1}>IETE</h1>
        <h4 className="text-white text-xl md:text-2xl lg:text-3xl">
          Students' Forum
        </h4>

        <p className="text-white mt-8 md:mt-[50px] text-sm md:text-base lg:text-lg max-w-md md:max-w-xl lg:max-w-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          recusandae hic incidunt maiores in culpa minus temporibus eius aliquid
          similique!
        </p>
        <div className="flex justify-center items-center mt-6 md:mt-10">
          <img
            src="/src/assets/iete_logo.png"
            alt="IETE Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
          />
        </div>
        <button className="bg-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-mono mt-10 md:mt-16 lg:mt-20 flex gap-x-2 group text-sm md:text-base">
          <p>LEARN MORE</p>
          <CircleArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
        </button>

        <div className="flex justify-center items-center relative w-full">
          <img
            src="/src/assets/learnmore.png"
            alt="Learn More Arrow"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-25 lg:h-25 absolute right-4 md:right-8 lg:right-[50px] bottom-[-100px] md:bottom-[-180px] lg:bottom-[-260px]"
          />
        </div>
      </section>
      <section
        id="aboutus"
        className="w-screen min-h-screen bg-[url('/src/assets/landingBG2.png')] bg-cover bg-center bg-no-repeat"
      >
        <Heading text="ABOUT US" />
      </section>
    </div>
  )
}

export default Landing
