import React from "react";

import event from "../assets/image.png";
import styles from "../css/event.module.css";

const events = [
  {
    number: "01",
    tagline: "Get Started",
    title: "ELEMENTOS",
    description:
      "An electronics-based society is one where technology profoundly influences daily life, with homes and cities utilizing d significant role, streamlining tasks in various sectors, from manufacturing to household chores, thus increasing productivity. The rise of e-commerce has changed traditional retail, making shopping more accessible than ever. Education has been",
  },
  {
    number: "02",
    tagline: "Hiking Essentials",
    title: "ORIENTATION",
    description:
      "An electronics-based society is one where technology profoundly influences daily life,  with homes and cities utilizing d significant role, streamlining tasks in various sectors, from manufacturing to household chores, thus increasing productivity. The rise of e-commerce has changed traditional retail, making shopping more accessible than ever. Education has been",
  },
  {
    number: "03",
    tagline: "Where you go is the key",
    title: "FLAGATHON",
    description:
      "An electronics-based society is one where technology profoundly influences daily life,  with homes and cities utilizing d significant role, streamlining tasks in various sectors, from manufacturing to household chores, thus increasing productivity. The rise of e-commerce has changed traditional retail, making shopping more accessible than ever. Education has been",
  },
];

function Event() {
  return (
    <>
      <div className="bg-black">
        <section className="lg:h-screen w-full flex justify-center items-center overflow-hidden scrollbar-hide h-[50vh]">
          <div className="flex flex-col justify-center items-center relative">
            <h1 className={styles.eventTitle}>EVENTS</h1>
            <h3 className={styles.customH3}>EVENTS</h3>
          </div>
          <img
            src={event}
            alt="event"
            className="w-full h-full object-cover absolute  "
          />
        </section>
        <section
          className="w-full flex justify-center items-center bg-black flex-col lg:mt-[150px]
        mt-[250px] md:gap-y-[250px] gap-y-[50px]  pb-[60px]"
        >
          {events.map((event) => (
            <Elementos
              key={event.number}
              number={event.number}
              tagline={event.tagline}
              title={event.title}
              description={event.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default Event;

const NumberedSection = ({ number }) => {
  return (
    <div className="flex absolute  max-md:flex-col">
      <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
        <div className="mr-0 leading-none text-white text-[150px] md:text-[240px] opacity-15 absolute top-[-40px]">
          {number}
        </div>
      </div>
    </div>
  );
};

const ContentSection = ({ tagline, title, content }) => {
  return (
    <div className="flex overflow-hidden flex-col mt-20 w-full text-lg text-amber-200 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-6 max-w-full font-extrabold uppercase tracking-[6px] w-[268px]">
        <div className="flex shrink-0 my-auto h-0.5 bg-amber-200 w-[72px]" />
        <div className="grow shrink w-[158px]">{tagline}</div>
      </div>
      <h2 className="mt-7 text-[36px] text-white lg:text-[80px] md:text-[50px]  font-alatsi">
        {title}
      </h2>
      <p className="mt-7 text-[17px] text-white max-w-[100%] md:text-3xl max-md:max-w-full">
        {content}
      </p>
      <button className="mt-7 max-w-full italic w-[127px] max-md:pr-5 text-left">
        read more
      </button>
    </div>
  );
};

const Elementos = ({ number, tagline, title, description }) => {
  return (
    <article className="w-[80%] lg:w-[60%] max-md:max-w-full">
      <div
        className={`flex gap-5 max-md:flex-col ${
          number % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        <section className="flex flex-col-reverse w-[59%] max-md:ml-0 max-md:w-full">
          <div className="mt-10 max-md:mt-10 max-md:max-w-full relative">
            <NumberedSection number={number} />
            <ContentSection
              tagline={tagline}
              title={title}
              content={description}
            />
          </div>
        </section>
        <aside className="flex flex-col ml-5 mr-10 w-[41%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/100caee604b14d506ac2b55d245cf7d9550109bfcf02eeca4e3ce207e89308cf?placeholderIfAbsent=true&apiKey=1e94dac72461470eb67aa910a2fb5ecf"
            alt="Elementos visual representation"
            className="object-contain grow w-full aspect-[0.7] max-md:mt-10 max-md:max-w-full"
          />
        </aside>
      </div>
    </article>
  );
};
