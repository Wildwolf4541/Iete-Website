import React from 'react'
import { Atom } from 'lucide-react'
import styles from '../css/department.module.css'

const departments = [
  {
    title: 'ELECTRONICS',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className: ' opacity-150 bg-[#5b2eb6] rounded-[40px] border border-white',
  },
  {
    title: 'WEB DEVELOPMENT',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: <Atom className="w-16 h-16 text-white/70" />,
    className:
      'bg-gradient-to-br from-blue-600 to-blue-900 opacity-150 bg-[#504cff] rounded-[40px] border border-white',
  },
  {
    title: 'DESIGNING',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className:
      'bg-gradient-to-br from-gray-800 to-gray-900 opacity-150 bg-[#1f1a2a] rounded-[40px] border border-white',
  },
  {
    title: 'MARKETING',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className: 'bg-gradient-to-br from-purple-700 to-purple-900',
  },
  {
    title: 'AI/ML',
    description:
      'Profoundly influences daily life, transforming communication, work, and social interactions.',

    className: 'bg-gradient-to-br from-gray-800 to-gray-900',
  },
]

const projects = [
  {
    department: 'ELECTRONICS DEPARTMENT',
    title: 'Abcd project circuit',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions. In this society, constamce convenience, with homes and cities utilizing devices that can be controlled remotely. Automation plays a significant role, streamlining tasks in various sectors, from manufacturing to household chores, thus increasing productivity. The rise of e-commerce has changed traditional retail, making shopping more accessible than ever. Education has been',
  },
  {
    department: 'WEB DEVELOPMENT DEPARTMENT',
    title: 'Abcd project circuit',
    description:
      'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions. In this society, constamce convenience, with homes and cities utilizing devices that can be controlled remotely. Automation plays a significant role, streamlining tasks in various sectors, from manufacturing to household chores, thus increasing productivity. The rise of e-commerce has changed traditional retail, making shopping more accessible than ever. Education has been',
    image: 'Iete-Website/frontend/iete-website/src/assets/background.jpg',
  },
]

const DepartmentsSection = () => {
  return (
    <div className="w-screen bg-black text-white">
      <section className="w-screen min-h-screen bg-[url('/src/assets/landingBG1.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center px-4">
        <div className="mb-8 text-center mt-10 relative w-full">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white/10">
            DEPARTMENTS
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white/90 pt-2 absolute top-5 left-1/2 -translate-x-1/2">
            DEPARTMENTS
          </h2>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5 w-full max-w-7xl mb-16">
          {departments.map((dept, index) => {
            let gridPosition = ''

            // Manually define the grid area equivalent
            switch (index) {
              case 0: // div1
                gridPosition = 'row-start-1 col-start-1'
                break
              case 1: // div2 (spans 2 columns)
                gridPosition = 'row-start-1 col-start-2 col-span-2'
                break
              case 2: // div3
                gridPosition = 'row-start-2 col-start-1'
                break
              case 3: // div4
                gridPosition = 'row-start-2 col-start-2'
                break
              case 4: // div5
                gridPosition = 'row-start-2 col-start-3'
                break
              default:
                break
            }

            return (
              <div
                key={dept.title}
                className={`${gridPosition} ${dept.className} p-6  shadow-lg transform transition-transform hover:scale-105 relative overflow-hidden min-h-[200px] flex flex-col justify-between bg-glassyBg rounded-2xl shadow-glassy backdrop-blur-custom border border-glassyBorder`}
              >
                <div className={styles.glassy}>
                  <h3 className="text-xl font-bold mb-3">{dept.title}</h3>
                  <p className="text-sm text-white/80">{dept.description}</p>
                </div>
                {dept.icon && (
                  <div className="absolute bottom-4 right-4">{dept.icon}</div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <div className="relative mb-24 px-4">
        <div className="mb-8 text-center mt-10 relative">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white/10">
            PROJECTS
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white/90 pt-2 absolute top-5 left-1/2 -translate-x-1/2">
            PROJECTS
          </h2>
        </div>
      </div>

      <div className="space-y-32 text-center px-4 mb-20">
        {projects.map((project, index) => (
          <div key={index} className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-400 px-4 md:pl-14 py-12">
              {project.department}
            </h3>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-56 px-4 lg:pl-24">
              {index % 2 === 0 ? (
                <>
                  <div className="w-64 h-64 md:w-80 md:h-80 grid grid-cols-3 gap-2 bg-black flex-shrink-0">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          i % 2 === 0 ? 'bg-gray-200' : ''
                        }`}
                      ></div>
                    ))}
                  </div>

                  <div className="max-w-xl">
                    <h4 className="text-3xl md:text-4xl font-bold mb-4">
                      {project.title}
                    </h4>
                    <p className="text-base text-white/80 text-justify leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="max-w-xl order-2 lg:order-1">
                    <h4 className="text-3xl md:text-4xl font-bold mb-4">
                      {project.title}
                    </h4>
                    <p className="text-base text-white/80 text-justify leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="w-64 h-64 md:w-80 md:h-80 grid grid-cols-3 gap-2 bg-black flex-shrink-0 order-1 lg:order-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          i % 2 === 0 ? 'bg-gray-200' : ''
                        }`}
                      ></div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentsSection
