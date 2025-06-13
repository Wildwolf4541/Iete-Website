import React from 'react'
import styles from '../css/landing.module.css'
import { CircleArrowRight } from 'lucide-react'

function Landing() {
  return (
    <div className="overflow-hidden flex flex-col ">
      <section className="w-screen h-screen bg-[url('/src/assets/landingBG1.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center">
        <h1 className={styles.h1}>IETE</h1>
        <h4 className="text-white text-3xl">Students' Forum</h4>

        <p className="text-white mt-[50px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          recusandae hic incidunt maiores in culpa minus temporibus eius aliquid
          similique!
        </p>
        <div className="flex justify-center items-center mt-10">
          <img
            src="/src/assets/iete_logo.png"
            alt="IETE Logo"
            className="size-48 object-contain"
          />
        </div>
        <button className="bg-white px-8 py-4 rounded-full font-mono mt-20 flex gap-x-2 group">
          <p>LEARN MORE</p>
          <CircleArrowRight className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
        </button>

        <div className="flex justify-center items-center ">
          <img
            src="/src/assets/learnmore.png"
            alt="Learn More Arrow"
            className="size-25 ml-2 inline-block absolute right-[50px] bottom-[-340px]"
          />
        </div>
      </section>
      <section
        id="aboutus"
        className="w-screen h-screen bg-[url('/src/assets/landingBG2.png')] bg-cover bg-center bg-no-repeat"
      ></section>
    </div>
  )
}

export default Landing
