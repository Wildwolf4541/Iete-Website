import React from 'react';
import { Atom } from 'lucide-react';
import styles from "../css/department.module.css";


const departments = [
  {
    title: 'ELECTRONICS',
    description: 'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className: ' opacity-150 bg-[#5b2eb6] rounded-[40px] border border-white',
  },

  {
    title: 'WEB DEVELOPMENT',
    description: 'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: <Atom className="w-16 h-16 text-white/70" />,
    className: 'bg-gradient-to-br from-blue-600 to-blue-900 opacity-150 bg-[#504cff] rounded-[40px] border border-white',
  },
  {
    title: 'DESIGNING',
    description: 'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className: 'bg-gradient-to-br from-gray-800 to-gray-900 opacity-150 bg-[#1f1a2a] rounded-[40px] border border-white',
  },
  {
    title: 'MARKETING',
    description: 'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: null,
    className: 'bg-gradient-to-br from-purple-700 to-purple-900',
  },
  {
    title: 'AI/ML',
    description: 'Profoundly influences daily life, transforming communication, work, and social interactions.',
    icon: <i className="fas fa-python text-white/70 w-16 h-16"></i>, // Added Python icon
    className: 'bg-gradient-to-br from-gray-800 to-gray-900',
  },
];

const projects = [
  {
    department: 'ELECTRONICS DEPARTMENT',
    title: 'Abcd project circuit',
    description: 'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions. In this society, constamce convenience, with homes and cities utilizing devices that can be controlled remotely. Automation plays a significant role, streamlining tasks in various sectors, from manufacturing to household chores, thus increasing productivity. The rise of e-commerce has changed traditional retail, making shopping more accessible than ever. Education has been',
   
  },
  {
    department: 'WEB DEVELOPMENT DEPARTMENT',
    title: 'Abcd project circuit',
    description: 'An electronics-based society is one where technology profoundly influences daily life, transforming communication, work, and social interactions. In this society, constamce convenience, with homes and cities utilizing devices that can be controlled remotely. Automation plays a significant role, streamlining tasks in various sectors, from manufacturing to household chores, thus increasing productivity. The rise of e-commerce has changed traditional retail, making shopping more accessible than ever. Education has been',
       image:'Iete-Website/frontend/iete-website/src/assets/background.jpg',
  },
];

const DepartmentsSection = () => {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      {/* Header with Overlay Text Effect */}
      <div className="relative mb-16 text-center">
        <h1 className="text-9xl font-bold text-white/10 absolute top-0 left-0 w-full">
          DEPARTMENTS
        </h1>
        <h2 className="text-6xl font-bold relative z-10 text-white/90 pt-2">
          DEPARTMENTS
        </h2>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {departments.map((dept, index) => (
          <div
            key={dept.title}
            className={`${dept.className} p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 relative overflow-hidden min-h-[200px] flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold mb-3">{dept.title}</h3>
              <p className="text-sm text-white/80">{dept.description}</p>
            </div>
            {dept.icon && (
              <div className="absolute bottom-4 right-4">
                {dept.icon}
              </div>
            )}
          </div>
        ))}
      </div>

          {/* Projects Section with Background Text */}
          <div className="relative mb-24">
        {/* Background Text Layer */}
        {/* <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
          <h1 className="text-[400px] font-bold text-gray-800/20 text-center whitespace-nowrap transform -translate-y-1/2">
            PROJECTS
          </h1>
        </div> */}

        {/* Middle Layer Text */}
        <div className="relative">
          <h2 className=" text-[200px] opacity 110  font-bold text-white/5 text-center leading-none">
            PROJECTS
          </h2>
        </div>

        {/* Front Layer Text */}
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h3 className="text-6xl font-bold text-purple-400 text-center">
            PROJECTS
          </h3>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-32 text-center ">
        {projects.map((project, index) => (
          <div key={index} className=" max-w space-y-8 ">
            {/* Department Header */}
            <h3 className="text-4xl  font-bold text-purple-400  pl-14 py-12">
              {project.department}
            </h3>

            {/* Project Content */}
            <div className="flex flex-col lg:flex-row items-start gap-56 pl-24">
              {index % 2 === 0 ? (
                <>
                  {/* Checkerboard Pattern */}
                  <div className="w-80 h-80 grid grid-cols-3 gap-2  bg-black flex-shrink-0">
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                  </div>

                  {/* Project Details */}
                  <div className="max-w-xl">
                    <h4 className="text-4xl font-bold mb-4">{project.title}</h4>
                    <p className="text-white/80 text-justify leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </>
              ) : (
                <>


                  {/* Project Details */}


                  <div className="max-w-xl">
                    <h4 className="text-4xl font-bold mb-4">{project.title}</h4>
                    <p className="text-white/80 text-justify leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Checkerboard Pattern */}
                  <div className="w-80 h-80 grid grid-cols-3 gap-2 bg-black flex-shrink-0">
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                    <div className="w-180 h-180"></div>
                    <div className="w-180 h-180 bg-gray-200"></div>
                  </div>



                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsSection;
